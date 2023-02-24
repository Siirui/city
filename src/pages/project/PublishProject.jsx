import Model from "../../components/Model";
import Box from "@mui/material/Box";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {Button, Container, Paper} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Typography from "@mui/material/Typography";
import ImgMediaCard from '../../components/ImgMediaCard';
import ListItem from '@mui/material/ListItem';
import {FixedSizeList} from 'react-window';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import model_data from './model_info.json'
import {exportGLTF} from "../../utils";


const labels = ['公告栏和展板', '功能类', '绿化类']


// 使用myClassName+model_paths[index]可以获得model_path, 结合model_names[index]可以获取model object
// 使用imgBaseUrl + picturls[index]可以获取图片路径

const myModels = model_data.model_data

//支持场景选择也就是项目选择
// const scene_paths = ['scenes/changdi/originalsite/', 'scenes/wooden/child/', 'scenes/natural/green/', 'scenes/yuzhi/originalsite/']
// const scene_lables = ['项目1', '项目2', '项目3', '项目4']
// const scene_names = ['552', 'child', 'green', '777']

const scene_paths = ['models/moxing/gonggaolanhezhanban/gonggaolan/Steel/']
const scene_lables = ['项目1']
const scene_names = ['263xcl']
/**
 * 发布项目
 * @param props 把props当中的模型信息传递过去
 * @returns {JSX.Element}
 * @constructor
 */
function PublishProject(props) {


  /**
   * 设置分类标签
   */
  const [myLabel, setLabel] = React.useState('公告栏和展板');
  /**
   * 修改分类
   * @param event
   */
  const handleChangeModels = (event) => {
    setLabel(event.target.value);
  };

  const handleChangeScenes = (event) => {
    console.log("改变了场景")
    setScene(event.target.value);
    changeScene(scene_paths[getSceneIndex(myScene)],scene_names[getSceneIndex(myScene)])
  }

  /**
   * 渲染模型库当中的模型列表
   * @param props
   * @returns {JSX.Element}
   */
  function renderRow(props) {
    //这个函数是可以拿到当前myClass当前的内容并进行渲染，但是它不知道自己需要渲染什么颜色，但是我们传入的实际上就是有props index内容，因此需要使用
    const {index, style} = props;
    return (
        <ListItem style={style} key={index} component="div" disablePadding>
          <ImgMediaCard
              myClassName={myClass.myClassName}
              imgBaseUrl={myClass.imgBaseUrl}
              // 注意下面的这个model几种颜色的model放到一起
              model={myClass.models[index]}
              addModel={addModel}
          />
        </ListItem>
    );
  }

  const [myScene, setScene] = useState(scene_lables[0])
  const [price, setPrice] = useState(0)
  const [CO2, setCO2] = useState(0)
  const [Sat, setSat] = useState(0)
    
  /**
   * 第一个Ref是用来获取Model组件当中的函数
   * @type {React.MutableRefObject<undefined>}
   * @private
   */
  const _ref = useRef()
  /**
   * 加入模型，需要加入并且增加模型的价钱
   * @param model_path
   * @param model_name
   * @param money
   */
  const addModel = (model_path, model_name, money, carbon, satisfy) => {
    _ref.current.addModel(model_path, model_name);
      setPrice(price + money)
      setCO2(CO2 + carbon)
      setSat(Sat + satisfy)
      console.log("addModel调用")
  }

  /**
   * 改变场景
   * @param model_path
   * @param model_name
   */
  const changeScene = (model_path, model_name) => {
    _ref.current.changeScene(model_path, model_name);
    setPrice(0)
  }
  const downloadModel = ()=>{
    _ref.current.downloadModel()
  }
  /**
   * 获取分类的index
   * @param label
   * @returns {number}
   */
  const getIndex = (label) => {
    for (let i = 0; i < labels.length; i++) {
      if (labels[i] === label) {
        return (i)
      }
    }
    return -1
  }


  /**
   * 获取场景的index
   * @param scene_label
   * @returns {number}
   */
  const getSceneIndex = (scene_label) => {
    for (let i = 0; i < scene_lables.length; i++) {
      if (scene_lables[i] === scene_label) {
        console.log(i)
        return (i)
      }
    }
    console.log(scene_label)
    console.log("没有找到")
    return -1
  }
  const [myClass, setClass] = useState(myModels[0])
  useEffect(() => {
    setClass(myModels[getIndex(myLabel)]);
    // console.log(getIndex(myLabel))
  }, [myLabel])

  // return (
  //     <div>
  //       <div id={'model-box'}>这是测试</div>
  //       <button onClick={downloadModel}>保存</button>
  //       <Model ref1={_ref} model_path={scene_paths[getSceneIndex(myScene)]} model_name={scene_names[getSceneIndex(myScene)]}/>
  //     </div>
  //
  // )
  return (
      <Box sx={{flexGrow: 1, display: 'flex', marginTop: 3, marginLeft:25}}>
        <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                // width:650,
                // height:650,
                maxWidth: 900,
                maxHeight: 900,
              },
            }}
        >
          <Paper id={"model-paper"} elevation={3} sx={{borderRadius: 5}}>
            <Container>
              <Box id={"model-box"} sx={{display: 'flex', alignItems: 'flex-end', padding: '0 160px 10px 160px'}}>
                <ModeEditIcon sx={{color: 'action.active', mr: 1, my: 0.5, display: 'flex'}}/>
                <Typography
                    variant="h5"
                    // noWrap
                    component="div"
                    sx={{mr: 2, display: 'flex'}}
                >
                  模型编辑器
                </Typography>
                <FormControl variant="standard" sx={{m: 1, minWidth: 130}}>
                  <InputLabel id="scene-select-standard-label">项目选择</InputLabel>
                  <Select
                      labelId="scene-select-standard-label"
                      id="scene-select-standard"
                      value={myScene}
                      onChange={handleChangeScenes}
                      label="项目1"
                  >
                    {scene_lables.map((label) => (<MenuItem key={label} value={label}>{label}</MenuItem>))}
                  </Select>
                </FormControl>
                <Button variant="contained" size="large" sx={{margin: '0 0 10px 10px', display: 'flex'}} onClick={downloadModel}>保存</Button>
              </Box>
                  <Model ref1={_ref} model_path={scene_paths[getSceneIndex(myScene)]} model_name={scene_names[getSceneIndex(myScene)]}/>
            </Container>
            {/*<Typography*/}
            {/*    variant="h6"*/}
            {/*    noWrap*/}
            {/*    component="div"*/}
            {/*    sx={{mr: 2, display: 'flex', margin: '15px 10px'}}*/}
            {/*>*/}
            {/*  当前选中模型为:*/}
            {/*  <Button variant={"outlined"} size={"medium"}*/}
            {/*          style={{color: '#8d6e63', border: '1px solid #8d6e63', marginLeft: 200}}>删除</Button>*/}
            {/*</Typography>*/}
            
                  <Typography
                variant="body1"
                noWrap
                component="div"
                sx={{mr: 2, display: 'flex', margin: '5px 10px'}}
            >
                      预算：{price}&nbsp;碳排放：{CO2}&nbsp;居民满意度：{Sat}&nbsp;总分：{100}
            </Typography>
              </Paper>
              
          <Paper elevation={3} sx={{borderRadius: 5}}>
            <Box id={"model-lib"} sx={{display: 'flex', alignItems: 'flex-end', padding: '15px 20px'}}>
              <FormControl variant="standard" sx={{m: 1, minWidth: 160}}>
                <InputLabel id="simple-select-standard-label">分类</InputLabel>
                <Select
                    labelId="simple-select-standard-label"
                    id="simple-select-standard"
                    value={myLabel}
                    onChange={handleChangeModels}
                    label="分类"
                >
                  {labels.map((label) => (<MenuItem key={label} value={label}>{label}</MenuItem>))}
                </Select>
              </FormControl>
              <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  sx={{mr: 2, display: 'flex'}}
              >
                模型库
              </Typography>
            </Box>
            <Container sx={{overflow: 'hidden'}}>
              <Box
                  sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
              >
                {/*这个渲染的应该是每一个大类中的模型*/}
                <FixedSizeList
                    height={560}
                    width={360}
                    itemSize={390}
                    // 渲染的应该是模型，每个模型再去选颜色
                    itemCount={myClass.models.length}
                    overscanCount={5}
                >
                  {renderRow}
                </FixedSizeList>
              </Box>
            </Container>
            {/* <Typography
                variant="body1"
                noWrap
                component="div"
                sx={{mr: 2, display: 'flex', margin: '5px 10px'}}
            >
                      预算: {price} <br></br>
                      碳排放: {CO2} <br></br>
                      居民满意度：{Sat} <br></br>
                      总分：{100}
            </Typography> */}
          </Paper>
        </Box>
      </Box>)
}

export default PublishProject;
