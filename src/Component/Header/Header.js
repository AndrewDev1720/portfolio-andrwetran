import { React, useState, useContext } from "react";
import "./header.css";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import { FontColorContext } from '../../App';
const Header = (props) => {
  const fontColor = useContext(FontColorContext);
  // const headerBackGround = {
  //   position: 'absolute',
  //   height: '100vh', 
  //   width: '100%',
  //   backgroundColor: '#EDF9FE',
  //   // backgroundColor: fontColor === 'white' ? '#151515' : 'white',
  //   zIndex: '-2',
  // }

  const classes = "header " + props.className;
  const [showLightVideo, setShowLightVideo] = useState(true);

  const handleThemeChange = (color) => {
    if (color === "black") {
      setShowLightVideo(true);
    } else {
      setShowLightVideo(false);
    }
  };

  return (
    <div>
      {/* <div style={headerBackGround}></div> */}
      <div className="header-video">
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className={showLightVideo ? "header-video-active" : ""}
        >
          <source
            src="https://themes.fourthwall.com/themes/assets/11d2f253-34b7-4fdc-b01b-17868cd74972/assets/video-bg-light.mp4"
            type="video/mp4"
          />
        </video>
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className={!showLightVideo ? "header-video-active" : ""}
        >
          <source
            src="https://themes.fourthwall.com/themes/assets/11d2f253-34b7-4fdc-b01b-17868cd74972/assets/video-bg-dark.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="header-content">
        <NavBar
          onThemeChange={props.onThemeChange}
          onVideoChange={handleThemeChange}
        />
        <Banner />
        <AboutMe />
        {props.children}
      </div>
    </div>
  );
};

export default Header;
