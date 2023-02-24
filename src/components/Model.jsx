import React from "react";
import * as THREE from 'three';

import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {DDSLoader} from "three/examples/jsm/loaders/DDSLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {TransformControls} from "three/examples/jsm/controls/TransformControls";
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import {exportGLTF, exportToObj} from "../utils";
const baseUrl = 'http://rcirkt0a3.hd-bkt.clouddn.com/'
let container;

let camera, scene, renderer;

let currentModel = "0";
let tran
const mouse = new THREE.Vector2(), raycaster = new THREE.Raycaster();
let mouseX = 0, mouseY = 0;

let object;
// let rayCaster = new THREE.Raycaster();
/**
 * 这个manager看起来是可以复用的
 * @type {LoadingManager}
 */
const manager = new THREE.LoadingManager();
manager.addHandler(/\.dds$/i, new DDSLoader());

const grid = new THREE.GridHelper(5000, 30, 0xffffff, 0xffffff);
grid.material.opacity = 0.8;
grid.material.depthWrite = false;
grid.material.transparent = true;

/**
 * 一个mtl loader
 * @type {MTLLoader}
 */
const loader = new MTLLoader(manager);
container = document.createElement('div');


async function downloadModel() {
  // exportToObj(scene)
  scene.remove(tran)
  await exportGLTF(scene)
  scene.add(tran)
}


/**
 * 模型
 */
class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props,scene:scene}
    this.props.ref1.current = {
      addModel: (model_path, model_name) => {
        addModel(model_path, model_name);
      },
      changeScene:(model_path,model_name)=>{
        changeScene(model_path,model_name);
      },
      downloadModel:()=>{
        downloadModel()
      },
      scene:this.state.scene
    }
  }

  componentWillUnmount() {
    console.log("调用了这个")
    window.removeEventListener('resize', onWindowResize, true)
  }

  render() {
    return (
          <div id={"model"}/>
    )
  }

  addModel = (model_path, model_name) => {
    addModel(model_path, model_name)
    this.setState({scene:scene})
  };

  /**
   * 进行模型的渲染
   */
  componentDidMount() {

    init(this.state.model_path, this.state.model_name);
    animate()
    window.addEventListener('click', onMouseClick, false);
    window.addEventListener('keydown', deleteModel);
  }
}//end of class


// models

function onProgress(xhr) {

  if (xhr.lengthComputable) {

    const percentComplete = xhr.loaded / xhr.total * 100;
    console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');

  }

}

function onError() {
  downloadModel()
}

/**
 * 初始化
 * @param model_path
 * @param model_name
 */
function init(model_path, model_name) {

  container = document.createElement('div');
  document.getElementById('model').appendChild(container)
  camera = new THREE.PerspectiveCamera(450, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(40, 40, 60);

  // scene

  scene = new THREE.Scene();

  const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 0.8);
  camera.add(pointLight);
  scene.add(camera);

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setClearColor('rgb(213,213,213)', 1.0);
  renderer.setSize(document.getElementById("model-box").offsetWidth, document.getElementById("model-box").offsetWidth * 0.8)
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;
  scene.add(grid)


  container.appendChild(renderer.domElement);
  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.addEventListener('change', render); // use if there is no animation loop
  orbit.minDistance = 500;
  orbit.maxDistance = 10000;
  orbit.target.set(0, 0, 0);
  orbit.update();

  tran = new TransformControls(camera, renderer.domElement);
  tran.addEventListener('change', render);

  tran.addEventListener('dragging-changed', function (event) {
    orbit.enabled = !event.value;
  });

  addModel(model_path,model_name)
  scene.remove(tran)
  render();
  window.addEventListener('resize', onWindowResize);
}

/**
 * 屏幕尺寸变化
 */
function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  console.log(document.getElementById("model-box").offsetWidth)
  renderer.setSize(document.getElementById("model-box").offsetWidth, document.getElementById("model-box").offsetWidth * 0.8)
}

/**
 * 动画
 */
function animate() {
  requestAnimationFrame(animate);
  render();
}


/**
 * 点击模型进行选中和编辑
 * @param event
 */
function onMouseClick(event) {
//通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
  console.log(event.clientX)
  mouse.x =( (event.clientX-document.getElementById('model').getBoundingClientRect().left) / document.getElementById('model').offsetWidth) * 2 - 1;
  mouse.y = -((event.clientY-document.getElementById('model').getBoundingClientRect().top) / document.getElementById('model').offsetHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  console.log(raycaster)
  let intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length) {
    //倘若点击事件和场景当中的mesh存在交叉
    const childs = scene.children
    for (let i = 0; i < intersects.length; i++) {
      let uuid = intersects[i].object.uuid
      for (let i = 0; i < childs.length; i++) {
        if (childs[i].getObjectByProperty('uuid', uuid) !== undefined && childs[i].type === "Group") {
          scene.remove(tran)
          tran.attach(childs[i])
          scene.add(tran)
          // console.log(childs[i])
          currentModel = childs[i].uuid
          console.log(currentModel)
          return;
        }
      }
    }
  }
}


/**
 * 删除模型
 * @param event
 */
function deleteModel(event) {
  if (event.keyCode === 46) {
    console.log("点击删除键成功")
    if (currentModel !== "0") {
      console.log("删除模型事件调用")
      scene.remove(tran)
      scene.getObjectByProperty('uuid', currentModel).removeFromParent()
      console.log(tran)
      currentModel = "0"
    }
  }
}

/**
 * 改变场景功能
 * @param model_path
 * @param model_name
 */
function changeScene(model_path,model_name) {
  console.log("执行了Model组件当中的changeScene")
  // document.getElementById("model").removeChild(document.getElementById("model").children[1])
  // document.getElementById("model").removeChild()
  container.removeChild(renderer.domElement)
  console.log(document.getElementById("model"))
  // console.log(model_path,model_name)
  // const childs = scene.children
  // for(let i=0;i<scene.children.length;i++){
  //   childs[i].removeFromParent()
  // }
  init(model_path, model_name);
  animate()
}
/**
 * 添加模型
 * @param model_path
 * @param model_name
 */
function addModel(model_path, model_name) {
  // if(model_path===""){
  //   downloadModel()
  //   return;
  // }
  loader.setPath(model_path);
  loader.load(model_name + '.mtl', (materials) => {
    materials.preload();
    const objLoader = new OBJLoader(manager);
    objLoader.setMaterials(materials);
    objLoader.setPath(model_path);
    objLoader.load(model_name + '.obj', (object) => {
      object.position.y = 0;
      object.position.x = 0;
      object.position.z = 0;
      scene.remove(tran)
      scene.add(object)
      // downloadModel()
      tran.attach(object)
      scene.add(tran)
    }, onProgress, onError)
  });
  console.log(scene)
  // scene.add(tran)
  render();

}

function removeModel(uuid) {
  const obj = scene.getObjectByProperty('uuid', uuid)
  obj.removeFromParent();
}


function render() {

  camera.lookAt(scene.position);

  renderer.render(scene, camera);

}

export default Model;
