import React from "react";
import * as THREE from 'three';

import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {DDSLoader} from "three/examples/jsm/loaders/DDSLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

let container;

let camera, scene, renderer;

/**
 * 这个manager看起来是可以复用的
 * @type {LoadingManager}
 */
const manager = new THREE.LoadingManager();
manager.addHandler(/\.dds$/i, new DDSLoader());

/**
 * 一个mtl loader
 * @type {MTLLoader}
 */
const loader = new MTLLoader(manager);


/**
 * 这是第二个场景，体现在model_path, model_name不一样
 */
class Scene2 extends React.Component {
  constructor(props) {
    // console.log(props)
    super(props);
    /**
     * 这个场景也需要放模型进去
     * @type {{addModel: current.addModel}}
     */
    this.state = {...props}
    // this.state = {model_path: props.model_path, model_name: props.model_name}
  }

  componentWillUnmount() {
    console.log("调用了这个")
    window.removeEventListener('resize',onWindowResize,true)
  }

  render() {
    return (
        <div id={"scene2"}/>
    )
  }

  addModel = (model_path, model_name) => {
    addModel(model_path, model_name)
  };

  /**
   * 进行模型的渲染
   */
  componentDidMount() {
    init(this.state.model_path, this.state.model_name);
    animate()
  }

}


// models

function onProgress(xhr) {

  if (xhr.lengthComputable) {

    const percentComplete = xhr.loaded / xhr.total * 100;
    console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');

  }

}

function onError() {
}

function init(model_path, model_name) {

  container = document.createElement('div');
  document.getElementById('scene2').appendChild(container);

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
  renderer.setSize(500,400)
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;
  const grid = new THREE.GridHelper(5000, 30, 0xffffff, 0xffffff);
  grid.material.opacity = 0.8;
  grid.material.depthWrite = false;
  grid.material.transparent = true;
  scene.add(grid)


  container.appendChild(renderer.domElement);
  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.addEventListener('change', render); // use if there is no animation loop
  orbit.minDistance = 100;
  orbit.maxDistance = 10000;
  orbit.target.set(0, 0, 0);
  orbit.update();


  addModel(model_path, model_name);

  window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  // console.log(document.getElementById("model-box").offsetWidth)
  renderer.setSize(500,400)
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function addModel(model_path, model_name) {
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
      scene.add(object);
    }, onProgress, onError)
  });
  render();
}

function render() {

  camera.lookAt(scene.position);

  renderer.render(scene, camera);

}

export default Scene2;
