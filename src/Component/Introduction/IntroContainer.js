import React, { useState, useContext } from 'react';
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ModeIcon from '@mui/icons-material/Mode';
import SchoolIcon from '@mui/icons-material/School';
import Face2Icon from '@mui/icons-material/Face2';
import myPhoto from '../../Asset/SnapAvatar.jpg';
import cwruPhoto from '../../Asset/CWRU.jpg'
import uniImg from '../../Asset/University.png'
import { ReactComponent as IntroSvg } from '../../Asset/IntroSvg.svg';
import { ReactComponent as CwruSvg } from '../../Asset/CWRU.svg';
import { FontColorContext } from '../../App';
import { ReactComponent as SpartanSvg } from '../../Asset/Spartan.svg';
import "./IntroductionContainer.css";

const IntroContainer = () => {
  const fontColor = useContext(FontColorContext);
  const [hovered, setHovered] = useState(false);
  const introduction = {
    padding: '30px',
  }
  const infoRow = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  }
  const info = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'rgb(68,69,97)',
    fontFamily: 'GoogleSans-Medium',
  }
  const paragraph = {
    fontSize: '30px',
    color: fontColor === 'white' ? 'white' : '#24292e',
    width: '100%',
    fontFamily: 'GoogleSans-Medium',
    lineHeight: '50px'
  }
  const heading = {
    fontWeight: 'bold',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginTop: '30px'
  }
  const textAnimation = {
    offscreen: {y: 100},
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 2
      }
    }
  }
  const animation = {
    offscreen: {x: 100, opacity: 0},
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 2
      }
    }
  }
  const circleStyle = {
    height: "44px",
    width: "44px",
    boxShadow: "5px 5px 5px #d9dbdf",
    borderRadius: "50%",
    border: "1px solid #d9dbdf",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  }
  
  return (
    <div>
      <div style={heading}>
        <motion.div
          whileHover={{ rotate: 180 }}
        >
          {/* <Face2Icon sx={{ fontSize: '40px', color: 'rgb(68,69,97)' }}/> */}
        </motion.div>
          <Typography
            sx={{
              fontSize: '50px',
              fontWeight: 'bold',
              color: 'rgb(68,69,97)',
              fontFamily: 'Google-Sans-Bold'
            }}
          >
            Let Me Introduce
          </Typography>
          <hr style={{ width: '30%', textAlign: 'left', marginLeft: '0', marginTop: '10px', borderColor: 'rgb(68,69,97,0.5)' }} />
      </div>
      <Grid container style={introduction}>
        <Grid item container>
          <Grid item xs={8}>
            <motion.div>
              {/* <div
              onClick={e => {
                e.target.style.display = "none";
                const iframe = document.getElementById("video-player");
                iframe.src += "?autoplay=1";
              }}>
                  <img src={myPhoto} width="263px" height="150px" style={{position: "absolute", cursor:"pointer", borderRadius: "3%", zIndex: "2", marginLeft: "6px", marginTop: "-52px"}} />
              </div> */}
            <div style={{position: 'relative'}}>
              <iframe
                title="rickroll"
                id="video-player"
                width="20.7%"
                height="27.2%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allowFullScreen
                style={{
                  position: "absolute",
                  marginLeft: "50.5%",
                  marginTop: "0.8%",
                  zIndex: "1",
                  borderRadius: "3%",
                }}
              ></iframe>
                <IntroSvg/>
            </div>
            </motion.div>
          </Grid>
          <Grid item xs={4}>
            <motion.div 
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true }}
              variants={textAnimation}
            >
              <Typography sx={paragraph} align='left'> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item={4} sx={{marginTop: '15px'}}>
            <div style={infoRow}>
              <motion.div whileHover={{ scale: 1.2}}>
                <div style={circleStyle}>
                  <SpartanSvg height="40px" />
                </div>
               </motion.div> 
              <Typography style={info}>Case Western Reserve University</Typography>
              <motion.div whileHover={{ scale: 1.2}}>
                <div style={circleStyle}>
                  <ModeIcon sx={{ color: 'rgb(68,69,97)' }}/>
                </div>
              </motion.div>
              <Typography style={info}>Computer Science Major</Typography>
            </div>
              {/* <div style={infoRow}>
                <SchoolIcon sx={{ color: 'rgb(68,69,97)' }}/>
                <Typography style={info}>May 2024</Typography>
              </div> */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default IntroContainer;