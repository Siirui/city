import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MyCards from "./MyCards";
import ReactCompareImage from "react-compare-image";
import {Container, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import {useRef} from "react";
import {Parallax} from "react-parallax";


const imgFirst="img/wujiaochang.png"
const imgSecond = "img/yuyuan.png"
const imgThird  = "img/jijiyitang.png"

export default function ViewProject() {

  const _ref = useRef()

  return (
      <div>

        <Typography marginTop={3} variant="h5" component="div" sx={{textAlign: 'center'}}>
          上海市杨浦区五角场街道改造
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
              marginTop: '80px'
            }}
        >
          {/*图片对比*/}
          <Paper elevation={0} style={{margin: '0 auto'}}>
            <img
                src={`${imgFirst}`}
                alt={imgFirst}
                loading="lazy"
            />
          </Paper>

          {/*文字说明*/}
          <Paper elevation={0} style={{margin: '0 auto'}}>
            <Container sx={{margin: '5px auto'}}>
              <Typography sx={{textIndent:'2em', mb: 1.5, margin: '10px 10px',lineHeight: 2}} color="text.secondary">
                城市360团队在上海市杨浦区五角场街道的北茶园社区开展了长期的实践调研，先后共召开了四次居民会议，
                与北茶园居委会共同商讨社区中畸零地块改造的具体方案；与居委会成员共同回顾改造原因、意义以及进展；与北茶园居委会就设计师根据多次需求收集后形成的三个模型，
                共同商讨进一步的修改建议，并向居民详细介绍模型的基本元素与设计理念，
                与其讨论交流，为进一步丰富方案提供基础。最终团队基于居民的意见对方案进行了最后的修改与确认，使得项目提供的设计最终达到了居民所期望的既对儿童友好，又对老年友善的服务效果。
              </Typography>
            </Container>
          </Paper>
        </Box>
        <Divider/>
        {/*豫园*/}
        <Typography marginTop={3} variant="h5" component="div" sx={{textAlign: 'center'}}>
          上海市黄浦区豫园街道改造项目
        </Typography>
        <Container sx={{marginTop: 5}}>
          <img
              src={`${imgSecond}?w=164&h=164&fit=crop&auto=format`}
              alt={imgSecond}
              loading="lazy"
          />
        </Container>
        <Container sx={{margin: '5px auto'}}>
          <Typography sx={{textIndent:'2em', mb: 1.5, margin: '10px 10px',lineHeight: 2}} color="text.secondary">
            城市360团队在上海市黄浦区豫园街道的多个社区开展的微更新改造活动是同济大学经济与管理学院学生党总支响应庆祝新中国成立70 周年“青春告白祖国”主题教育活动的特色活动之一。2019年6月团队首次受邀来到历史悠久而底蕴深厚的豫园街道，通过实地考察及座谈沟通，确定了该街道东淮海公寓、复兴小区、果育小区等多个社区畸零空间存在的问题，同时主动了解了街道对于该地改造的需求和期望。


          </Typography>
          <Typography sx={{textIndent:'2em', mb: 1.5, margin: '10px 10px',lineHeight: 2}} color="text.secondary">
            在系列活动中，居民们积极与“微新”团队沟通交流，对已做出的改造表达了满意之情，并向团队表示了感谢，其次又提出了包括有关环境卫生、规章制度等方面的新的问题，成员们详细地记录了居民的反馈并提出了自己的一些建议和意见。在沟通的过程中，团队不仅梳理了该社区的重点问题，也与居民们达成了良性互动，建立了友好关系。
          </Typography>
          <Typography sx={{textIndent:'2em', mb: 1.5, margin: '10px 10px',lineHeight: 2}} color="text.secondary">
            在豫园街道改造项目的沟通中，团队时刻围绕着第一次提出的“从微更新入手改变社区”的理念和“增进社区人际关系”的最终目标。团队在调研中发现社区存在一些细小却对居民生活造成不便的零碎问题，如指示标识不清导致快递等外来人员寻找不到准确位置，又如晾衣架设置得不合理造成的生活困恼。于是团队针对这些细小的点，延续之前实践项目的沟通参与模式，从居民、居委会、街道办多方面收集了进一步的社区改进意见，随后开展了实地调研；最后在两者的基础上探讨了改造方案和未来计划。
          </Typography>
        </Container>
        <Divider/>
        <Typography marginTop={3} variant="h5" component="div" sx={{textAlign: 'center'}}>
          上海市杨浦区延吉街道改造项目
        </Typography>
        <Container sx={{marginTop: 5}}>
          <img
              src={`${imgThird}?w=164&h=164&fit=crop&auto=format`}
              alt={imgThird}
              loading="lazy"
          />
        </Container>
        <Container sx={{margin: '5px auto'}}>
          <Typography sx={{textIndent:'2em', mb: 1.5, margin: '10px 10px',lineHeight: 2}} color="text.secondary">
            位于杨浦区延吉街道的“济吉益堂”项目是由城市360社团负责主要设计和完工的一项校社合作项目。团队前期在社区的组织下进行了多次实地考察和座谈沟通，对社区改造空间的问题进行了分析总结。如延吉社区第二睦邻中心入口处树木过于繁茂挡住了主要通道；各处乱停车现象严重；围墙、地面、大门都相对比较老旧，与整体不够契合；每间房间的窗户没有设置窗帘，给房间使用者和社区居民不能带来比较好的视觉体验；整体隔音系统略差，举办部分活动可能会引起附近居民的投诉等空间问题以及一些活动宣传力度不够导致参与度不够等社区活动问题。
          </Typography>
          <Typography sx={{textIndent:'2em', mb: 1.5, margin: '10px 10px',lineHeight: 2}} color="text.secondary">
            在本次项目中，团队使用了多种创新的沟通方式，将提升社区微更新中的公民参与作为空间改造活动中的重点之一，通过采用简化教材宣传、学生志愿实践等方式进一步提高了与居民的沟通和协商程度。结合居民会议和平台收集反馈，团队发现居民最迫切的需求是拥有一个能够进行社区活动的开放性空间。之后团队通过平台的定点上传功能在敦化居委附近的畸零空间内匹配到了适宜改造的地块。最终，团队考虑多方需求，结合睦邻中心和高校社团活动，综合给出了各方都满意的改造方案。
          </Typography>
        </Container>
        <Divider sx={{marginTop:10}}/>
      </div>
  );
}
