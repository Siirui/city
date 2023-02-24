import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import OutlineButton from '../components/OutlineButton'
import Typography from '@mui/material/Typography';
import FilledButton from "./FilledButton";
import {Button} from "@mui/material";
import BasicTabs from "./BasicTabs";
import DialogSelect from "./DialogSelect";
import AlertDialogSlide from "./AlertDialogSlide";
import {useEffect, useRef, useState} from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

/**
 * 渲染一张卡片，链接可以跳转到相应的模型,接收到这个模型的类别以及其它参数
 * 这个卡片需要管理的状态主要就是颜色，依据颜色改变自己的model_path,model_name,pic_url
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function ImgMediaCard(props) {
  const [open, setOpen] = React.useState(false)
  // console.log(props)
  const model_base_url=props.myClassName
  const img_base_url=props.imgBaseUrl
    const money = props.model.money
    const carbon = props.model.carbon
    const satisfy = props.model.satisfy
  const colors=props.model.colors
  const paths=props.model.model_paths
  const names=props.model.model_names
  const urls = props.model.pic_urls

  const [model_path, setModelPath]=useState(props.model.model_paths[0])
  const [model_name, setModelName]=useState(props.model.model_names[0])
  const [myColor, setColor] = React.useState(colors[0]);
    const [img_url, setImgUrl] = React.useState()
    const [myMoney, setMoney] = React.useState(money[0])
    const [myCarbon, setCarbon] = React.useState(carbon[0])
    const [mySatisfy, setSatisfy] = React.useState(satisfy[0])


  /**
   * 通过useRef获取到Dialog的点击事件
   * @type {React.MutableRefObject<undefined>}
   * @private
   */

  const _ref = useRef()
  const openDialog = ()=>{
    _ref.current.handleClickOpen();
  }
  // console.log(props)
  /**
   * 增加模型，通过父组件的addModel来调用兄弟组件的函数
   * @param model_path
   * @param model_name
   * @param money
   */
  const addModel=(model_path, model_name, money, carbon, satisfy)=>{
    props.addModel(model_path, model_name, money, carbon, satisfy);
  }


  const getIndex=(color)=>{
    for (let i =0; i<colors.length;i++){
      if(colors[i]===color){
        return i
      }
    }
    return -1
  }
  // 每次修改颜色需要注意的是把图片的参数进行更新
  /**
   * 设置分类标签
   */

  /**
   * 修改分类
   * @param event
   */
  useEffect(()=>{
    setModelPath(paths[getIndex(myColor)])
      setModelName(names[getIndex(myColor)])
      setImgUrl(urls[getIndex(myColor)])
      setMoney(money[getIndex(myColor)])
      setCarbon(carbon[getIndex(myColor)])
      setSatisfy(satisfy[getIndex(myColor)])

    console.log(myColor)
    console.log(getIndex(myColor))
  },[myColor])
  const handleChangeColors = (event) => {
      setColor(event.target.value);
    // setClass(myModels[getIndex(myLabel)]);
  };
  return (
      <Card sx={{ maxWidth: 340 , marginTop:5}}>
        <FormControl variant="standard" sx={{m: 1, minWidth: 80}}>
          <InputLabel id="simple-select-standard-label">颜色选择</InputLabel>
          <Select
              labelId="simple-select-standard-label"
              id="simple-select-standard"
              value={myColor}
              onChange={
                handleChangeColors
              }
              label="颜色"
          >
            {colors.map((color,index) => (<MenuItem key={color} value={color}>{color}</MenuItem>))}
          </Select>
        </FormControl>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={img_base_url+img_url}
        >
          {/*测试*/}
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.model.name}
          </Typography>
          {/*<Typography variant="body2" color="text.secondary">*/}
          {/*  {props.content}*/}
          {/*</Typography>*/}
        </CardContent>
        <CardActions>
          <OutlineButton onClick={()=>{
            openDialog()
          }}>详情</OutlineButton>
          <Button onClick={()=>{addModel(model_base_url+model_path,model_name,myMoney,myCarbon,mySatisfy)}} variant={"contained"} size={"large"} style={{margin:'0 20px'}}>
          {/*<Button onClick={()=>{}} variant={"contained"} size={"large"} style={{margin:'0 20px'}}>*/}
            置入
          </Button>
          <AlertDialogSlide content={props.content} ref1={_ref} open={open}/>
        </CardActions>
      </Card>
  );
}
