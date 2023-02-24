// import Model from "../../components/Model";
import Model from "../../components/Model";
import Box from "@mui/material/Box";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {Button, Container, Paper} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Typography from "@mui/material/Typography";
import SelectVariants from "../../components/SelectVariants";
import ImgMediaCard from '../../components/ImgMediaCard';
import ListItem from '@mui/material/ListItem';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import MyMap from "../contact/Map";
import Draggable from 'react-draggable';
import DialogActions from "@mui/material/DialogActions";
import SearchIcon from '@mui/icons-material/Search';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import OutlineButton from "../../components/OutlineButton";
import FilledButton from "../../components/FilledButton";

const model_paths = ['models/moxing/charge/', 'models/moxing/dianziping/', 'models/moxing/flower/', 'models/moxing/gonggaolan/', 'models/moxing/grass/', 'models/moxing/greenwall/', 'models/moxing/guizi1/', 'models/moxing/guizi2/', 'models/moxing/guizi3/', 'models/moxing/guizi4/', 'models/moxing/lighwall/', 'models/moxing/streetlight/', 'models/moxing/streetlight2/', 'models/moxing/streetlight3/', 'models/moxing/streetlight4/', 'models/moxing/streeylight5/', 'models/moxing/yiliaoboz/', 'models/moxing/zhanban1/'];
const model_names = ['167', 'info+kiosk+with+55+inch+horizontal+touch+screen+panel', 'Sem+nome', '263xcl', 'grass', 'Plant+wall (1)', 'book+chest', 'Kids+toys', 'Wooden+bookcase+decor', 'cp_sport_1950_1200_500_2015_08_22', 'plant+wall+pannel', 'Antique+Lamp', 'Lamp-Flowers', 'street+lamps', 'street+lamps', 'street+lamps', 'yiliaobox', 'bulletin+board (1)']
const pic_urls = ['images\\xuanran\\3色草坪.png', 'images\\xuanran\\guizi2.png', 'images\\xuanran\\light1.png', 'images\\xuanran\\light2.png', 'images\\xuanran\\light2发光.png', 'images\\xuanran\\light3发光.png', 'images\\xuanran\\light4.png', 'images\\xuanran\\light4发光.png', 'images\\xuanran\\light5.png', 'images\\xuanran\\light5发光.png', 'images\\xuanran\\light3.png', 'images\\xuanran\\充电桩.png', 'images\\xuanran\\公告栏.png', 'images\\xuanran\\公告栏整体.png', 'images\\xuanran\\医疗箱.png', 'images\\xuanran\\展板1.png', 'images\\xuanran\\柜子1.png', 'images\\xuanran\\柜子3.png', 'images\\xuanran\\柜子4.png', 'images\\xuanran\\灯墙.png', 'images\\xuanran\\灯墙白.png', 'images\\xuanran\\电子屏.png', 'images\\xuanran\\绿化墙.png', 'images\\xuanran\\绿化花1m1m.png']
const money=[50, 80, 110, 140, 170, 200, 230, 260, 290, 320, 350, 380, 410, 440, 470, 500];


function PaperComponent(props) {
  return (
      <Draggable
          handle="#draggable-dialog-title"
          cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
  );
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 10,
  backgroundColor: alpha(theme.palette.common.white, 0.3),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.6),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));




/**
 * 发布项目
 * @param props 把props当中的模型信息传递过去
 * @returns {JSX.Element}
 * @constructor
 */
function PublishProject(props) {
  function renderRow(props) {
    const { index, style } = props;
    return (
        <ListItem style={style} key={index} component="div" disablePadding>
          <ImgMediaCard content={model_paths[index]} addModel={addModel} pic_url={pic_urls[index]} model_path={model_paths[index]} model_name={model_names[index]} money={money[index]}/>
        </ListItem>
    );
  }

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  useEffect(()=>{
    console.log("出现了变化")
  })
  const handleClickOpen =() => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const [model_path, setPath] = useState('');
  // const [model_name, setName] = useState('');
  const [price, setPrice] = useState(0)
  const _ref = useRef()
  /**
   * 加入模型，需要加入并且增加模型的价钱
   * @param model_path
   * @param model_name
   * @param money
   */
  const addModel = (model_path, model_name, money) => {
    _ref.current.addModel(model_path, model_name);
    setPrice(price+money)
  }
  return (
        <Container sx={{marginTop:5}}>
          <Paper id={"model-paper"} elevation={3} sx={{borderRadius: 5}}>
            <Container>
              {/*这个box放的是模型上面的内容*/}
              <Box id={"model-box"} sx={{display: 'flex',flex: '1 0 auto', alignItems: 'flex-end'}}>
                <ModeEditIcon sx={{color: 'action.active', mr: 1, my: 0.5, display: 'flex'}}/>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{mr: 2, display: 'flex'}}
                >
                  模型编辑器
                </Typography>
                <SelectVariants labels={['项目一','项目二']} minWidth={100}/>
                <Button variant="contained" size="medium" sx={{margin: '0 0 10px 10px', display: 'flex'}}>保存</Button>
                <Button onClick={handleClickOpen} variant={"outlined"} sx={{margin: '0 0 10px 10px', display: 'flex'}} style={{color:'#8d6e63', border:'1px solid #8d6e63'}}>添加模型</Button>
              </Box>
              <Model ref1={_ref} {...props}/>
            </Container>

            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{mr: 2, display: 'flex', margin: '15px 10px'}}
            >
              当前选中模型为:
              <Button variant={"outlined"} size={"medium"}
                      style={{color: '#8d6e63', border: '1px solid #8d6e63'}}>删除</Button>
            </Typography>
          </Paper>
          <Dialog
              open={open}
              onClose={handleClose}
              PaperComponent={PaperComponent}
              scroll={scroll}
              aria-labelledby="draggable-dialog-title"
              aria-describedby="scroll-dialog-description"
              fullWidth
          >
            <DialogTitle style={{ cursor: 'move' }} sx={{backgroundColor:'#e1bee7'}} id="draggable-dialog-title">
              <Box sx={{display: 'flex',flex: '1 0 auto', alignItems: 'flex-end'}}>
                <EmojiObjectsIcon sx={{color: 'action.active', mr: 1, my: 0.5, display: 'flex'}}/>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{mr: 2, display: 'flex'}}
                >
                  我的模型
                </Typography>
                <SelectVariants labels={['桌子','椅子']} minWidth={50}/>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Box>
            </DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
              <DialogContentText
                  id="scroll-dialog-description"
                  tabIndex={-1}
              >
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <FilledButton size={"medium"} onClick={handleClose}>取消</FilledButton>
              <OutlineButton size={"medium"} onClick={handleClose}>提交</OutlineButton>
            </DialogActions>
          </Dialog>
        </Container>)
}

export default PublishProject;
