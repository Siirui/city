import * as React from 'react';
import {Box, Button, Container, Divider} from "@mui/material";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ReactCompareImage from "react-compare-image";
import {Parallax} from "react-parallax";
import {Link} from "react-router-dom";
import MyCard from "./MyCard";
import BasicTable from "../../components/BasicTable";

const strs = ["快速发布、准确定位。\n",
  "个性化定制，模块化定制。\n",
  "专家认证畸零空间设计导则。\n",
  "全透明公开供给方双向选择。\n",
  "超过30个知名专业设计师工作室入驻。\n",
  "超过10个街道政府达成初步合作意向。\n",
  "多种多样产品及服务可供遴选。\n"];
const imgFirst="img/img.png"
const imgSecond = "img/second.jpg"
const imgThird  = "img/third.jpg"
const imgFourth = "img/fourth.png"
const imgBefore = "img/farmBefore.png"
const imgAfter = "img/farmAfter.png"
/**
 * 主页
 */
export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div>
          <Parallax bgImage={imgFirst} strength={300}>
            <div style={{ height: 450 }}>
                <Typography sx={{mt: 6, margin: '120px auto 20px', fontSize: '80px', textAlign: 'center'}} color="#8d6e63">
                  城市360
                </Typography>
                <Typography sx={{mb: 1.5, margin: '10px 10px', fontSize: '30px', textAlign: 'center'}} color="#8d6e63">
                  提供畸零空间活化全流程服务
                </Typography>
                <Typography sx={{mb: 1.5, margin: '30px 10px', fontSize: '30px', textAlign: 'center'}} color="#8d6e63">
                  <Button variant={"contained"} size={"large"} style={{margin:'0 20px'}}>
                    <Link to={"/all-projects"}>
                      查看已发布的项目
                    </Link>
                    </Button>
                  <Button variant={"outlined"} size={"large"} style={{color:'#8d6e63', border:'1px solid #8d6e63'}}>
                    <Link to={"/publish-project"} style={{color:"#8d6e63"}}>
                      发布新的项目
                    </Link>
                  </Button>
                </Typography>
              </div>
          </Parallax>
          <MyCard/>
          <Parallax bgImage={imgSecond} blur={9} strength={500}>
            <div style={{ backgroundColor:'rgba(7,5,5,0.42)', height: 400, }}>
              <Typography variant={'h5'} sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                textAlign:'center',
                transform: "translate(-50%,-50%)" }} color="white">
                让畸零空间成为在城市公共空间之中，使人们交谈、娱乐、休憩的场所
              </Typography>
            </div>
          </Parallax>

          <Container sx={{margin:'50px auto'}}>
            <Typography sx={{mt: 6, margin: '30px auto 20px', fontSize: '30px', textAlign: 'center'}} color="#8d6e63">
              什么是畸零空间
            </Typography>
            <Typography sx={{marginBottom:5,lineHeight: '30px', textAlign:'center'}} color="text.secondary">
              城市空间中，楼与楼之间、社区与社区之间，不同的形式种类作用的建筑群中间会不可避免地产生一些空间上的浪费。城市空间结构中相对不规则、零散的、细碎的、畸形的空间，被称为畸零空间。
            </Typography>
            <Divider/>
            <Typography sx={{marginBottom:3,lineHeight: '30px', textAlign:'center'}} color="text.secondary">
              典型案例
            </Typography>
            <Typography sx={{ fontSize: '20px', textAlign: 'center'}} color="#8d6e63">
              杨浦区创智农园
            </Typography>
            <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 5,
                    width: 500,
                    height: 450,
                  },
                  marginTop:'80px'
                }}
            >
              {/*图片对比*/}
              <Paper elevation={0} style={{margin:'0 auto'}}>
                <ReactCompareImage leftImage={imgBefore} rightImage={imgAfter}/>
              </Paper>

              {/*文字说明*/}
              <Paper elevation={0} style={{margin:'0 auto'}}>
                <Container sx={{margin:'5px auto'}}>
                  <Typography marginBottom={2} variant="h5" component="div" sx={{textAlign: 'center'}}>
                    改造前
                  </Typography>
                  <Typography sx={{mb: 1.5, margin: '10px 10px',lineHeight:3}} color="text.secondary">
                    城市开发中的典型隙地，因地下有重要市政管线通过，未得到充分利用，成为临时工棚和闲置地。
                  </Typography>
                </Container>

                <Container>
                  <Typography marginBottom={2} variant="h5" component="div" sx={{textAlign: 'center'}}>
                    改造后
                  </Typography>
                  <Typography sx={{mb: 1.5, margin: '10px 10px',lineHeight:3}} color="text.secondary">
                    改造为创智农园，拥有设施服务区、公共活动区、朴门菜园区、一米菜园区、互动园艺区等区域，菜园由社区居民自己维护，平常还会举办露天电影等社区活动。
                  </Typography>
                </Container>
              </Paper>
            </Box>
          </Container>
          <Parallax bgImage={imgThird} blur={9} strength={500}>
            <div style={{ backgroundColor:'rgba(7,5,5,0.42)', height: 400, }}>
              <Typography variant={'h5'} sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                textAlign:'center'
              }} color="white">
                连接政府与设计师，提供畸零空间设计导则与装配式设计方案简化设计成本
              </Typography>
            </div>
          </Parallax>
          <Container sx={{margin:'50px auto'}}>
            <Typography sx={{mt: 6, margin: '30px auto 20px', fontSize: '30px', textAlign: 'center'}} color="#8d6e63">
              城市360是什么
            </Typography>
            {["城市360是一个积极致力于对接城市空间改造诉求的项目团队",
              "收集城市社区的畸零空间，线性连接供给需求方、促成改造方案的组织策划与实施、优化畸零空间、趋向性提供畸零空间再生力。",
              "创新畸零空间设计导则，规范化畸零空间设计，减小成本。"].map(str => (<Typography textAlign={"center"} key={str} sx={{lineHeight: '30px'}} color="text.secondary">
              {str}
            </Typography>))}
            <Divider style={{marginTop:50}}/>
            <Typography sx={{mt: 6, margin: '30px auto 20px', fontSize: '20px', textAlign: 'center'}} color="#8d6e63">
              畸零空间的设计导则
            </Typography>
            {/*<BasicTable/>*/}
          </Container>
          <Parallax bgImage={imgFourth} blur={9} strength={500}>
            <div style={{ backgroundColor:'rgba(7,5,5,0.42)', height: 400, }}>
              <Typography variant={'h5'} sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                textAlign:'center',
                transform: "translate(-50%,-50%)" }} color="white">
                根据畸零空间不同的环境和形态设计不同的解决方案
              </Typography>
            </div>
          </Parallax>
        </div>
    )
  }

  componentDidMount() {
  }
}
