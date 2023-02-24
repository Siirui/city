import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import cardData from "./cardData";
import "./styles.css";
import OutlineButton from "../../components/OutlineButton";
import Paper from "@mui/material/Paper";
import GroupIcon from "@mui/icons-material/Group";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import FmdGoodIcon from "@mui/icons-material/FmdGood";


const strs = ["快速发布、准确定位。\n",
  "个性化定制，模块化定制。\n",
  "专家认证畸零空间设计导则。\n",
  "全透明公开供给方双向选择。\n",
  "超过30个知名专业设计师工作室入驻。\n",
  "超过10个街道政府达成初步合作意向。\n",
  "多种多样产品及服务可供遴选。\n"];

function MyCard() {
  return (
      <div className="main">
        <Hero>
          <div className="container">
            <div className="row">
              <div className="column">
                <Card>
                  {/*是什么*/}
                  <GroupIcon
                      sx={{
                        textAlign: 'center',
                        display: 'block',
                        margin: '10px auto',
                        fontSize: '45px',
                        color: '#8d6e63'
                      }}/>
                  <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
                    “城市360”是什么？
                  </Typography>
                  <Typography sx={{mb: 1.5, margin: '10px 10px', lineHeight: '30px'}} color="text.secondary">
                    城市空间中，楼与楼之间、社区与社区之间，不同的形式种类作用的建筑群中间会不可避免地产生一些空间上的浪费。城市空间结构中相对不规则、零散的、细碎的、畸形的空间，被称为畸零空间。
                  </Typography>
                  {/*<div className="card-title">{card.title}</div>*/}
                  {/*<div className="card-body">{card.description}</div>*/}
                  {/*<Image ratio={card.imageRatio} src={card.image} />*/}
                </Card>
              </div>
              <div className="column">
                <Card>
                  <SettingsIcon
                      sx={{
                        textAlign: 'center',
                        display: 'block',
                        margin: '10px auto',
                        fontSize: '45px',
                        color: '#8d6e63'
                      }}/>
                  <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
                    “城市360”之价值？
                  </Typography>
                  <Typography sx={{mb: 1.5, margin: '10px 10px'}} color="text.secondary">
                    助力政府管理：城市空间智慧管理，化“被动管理”为“主动服务”。
                  </Typography>
                  <Typography sx={{mb: 1.5, margin: '10px 10px'}} color="text.secondary">
                    唤醒社会认知：“互联网+更新”模式多键互联，加强人文体验。
                  </Typography>
                  <Typography sx={{mb: 1.5, margin: '10px 10px'}} color="text.secondary">
                    推进产教结合：“互联网+公益”理念整合资源，提供公益平台。
                  </Typography>
                </Card>
              </div>
              <div className="column">
                <Card>
                  <FmdGoodIcon
                      sx={{
                        textAlign: 'center',
                        display: 'block',
                        margin: '10px auto',
                        fontSize: '45px',
                        color: '#8d6e63'
                      }}/>
                  <Typography variant="h5" component="div" sx={{textAlign: 'center', margin: '5px'}}>
                    “城市360”的优势？
                  </Typography>
                  {strs.map(str => (<Typography key={str} sx={{lineHeight: '30px'}} color="text.secondary">
                    {str}
                  </Typography>))}
                </Card>
              </div>
            </div>
          </div>
        </Hero>
      </div>
  );
}

function Card({ children }) {
  // Adding this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
      <animated.div
          ref={ref}
          className="card"
          onMouseEnter={() => setHovered(true)}
          onMouseMove={({ clientX, clientY }) => {
            // Get mouse x position within card
            const x =
                clientX -
                (ref.current.offsetLeft -
                    (window.scrollX || window.pageXOffset || document.body.scrollLeft));

            // Get mouse y position within card
            const y =
                clientY -
                (ref.current.offsetTop -
                    (window.scrollY || window.pageYOffset || document.body.scrollTop));

            // Set animated values based on mouse position and card dimensions
            const dampen = 50; // Lower the number the less rotation
            const xys = [
              -(y - ref.current.clientHeight / 2) / dampen, // rotateX
              (x - ref.current.clientWidth / 2) / dampen, // rotateY
              1.07 // Scale
            ];

            // Update values to animate to
            setAnimatedProps({ xys: xys });
          }}
          onMouseLeave={() => {
            setHovered(false);
            // Set xys back to original
            setAnimatedProps({ xys: [0, 0, 1] });
          }}
          style={{
            // If hovered we want it to overlap other cards when it scales up
            zIndex: isHovered ? 2 : 1,
            // Interpolate function to handle css changes
            transform: animatedProps.xys.to(
                (x, y, s) =>
                    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
            )
          }}
      >
        {children}
      </animated.div>
  );
}

function Hero({ children }) {
  return (
      <div className="hero">
        <div className="hero-body">{children}</div>
      </div>
  );
}

function Image({ ratio, src }) {
  return (
      <div className="image-container">
        <div className="image-inner-container">
          <div
              className="ratio"
              style={{
                paddingTop: ratio * 100 + "%"
              }}
          >
            <div className="ratio-inner">
              <img src={src} alt="" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default MyCard;
