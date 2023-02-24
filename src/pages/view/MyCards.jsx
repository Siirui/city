import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import "./styles.css";
import OutlineButton from "../../components/OutlineButton";
import Paper from "@mui/material/Paper";
import GroupIcon from "@mui/icons-material/Group";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import FmdGoodIcon from "@mui/icons-material/FmdGood";


// const my

function MyCards() {
  return (
      <div className="main">
        <Hero>
          <div className="container">
            <div className="row">
              <div className="column">
                <Card>
                  
                </Card>
              </div>
              <div className="column">
                <Card>
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

export default MyCards;
