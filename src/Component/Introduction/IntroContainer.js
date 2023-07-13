import React, { useState, useContext, useEffect } from 'react';
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
import { ReactComponent as IntroSvg } from '../../Asset/IntroSvg2.svg';
import { ReactComponent as CwruSvg } from '../../Asset/CWRU.svg';
import { FontColorContext } from '../../App';
import { ReactComponent as SpartanSvg } from '../../Asset/Spartan.svg';
import "./IntroductionContainer.css";
import YouTubePlayer from './YouTubePlayer';

const IntroContainer = () => {
  const fontColor = useContext(FontColorContext);
  // useEffect(() => {
  //   const overlay = document.getElementById('overlay');
  //   const runningText = document.getElementById('running-text');

  //   runningText.style.display = 'none';

  //   overlay.addEventListener('click', () => {
  //     runningText.style.display = 'block';
  //   });
  // }, []);
  const introduction = {
    paddingTop: '20px',
    paddingBottom: '80px',
  }
  const infoRow = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  }
  const info = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: fontColor,
    fontFamily: 'GoogleSans-Medium',
  }
  const paragraph = {
    fontSize: '18px',
    color: fontColor === 'white' ? 'white' : '#3F3D56',
    width: '100%',
    fontFamily: 'FF-DIN-Pro-Medium',
    lineHeight: '160%',
    marginTop: '32px',
    marginBottom: '48px'
  }
  const heading = {
    fontWeight: 'bold',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  }
  const textAnimation = {
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
  const introContainerStyle ={
    padding: '30px', 
    backgroundColor: fontColor === 'white' ? '#151515' : '#F7F7FF', 
    borderRadius: '4px', 
    border: '2px solid #e8e8f0',
    // clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
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
        </motion.div>
          <Typography
            sx={{
              fontSize: '50px',
              fontWeight: 'bold',
              color: fontColor,
              fontStyle: 'italic',
              fontFamily: 'FF-DIN-PRO-COND_BOLD',
              paddingRight: '30px'
            }}
          >
            LET ME INTRODUCE
          </Typography>
          <hr style={{ width: '20%', textAlign: 'left', marginLeft: '0', marginTop: '10px', borderColor: '#e5202b' }} />
      </div>
      {/* <div style={{position: 'relative', height: '30px'}}>
        <div id="running-text">You have been rick rolled!</div>
      </div> */}
      <Grid container style={introduction}>
        <Grid item container gap={5} style={introContainerStyle}>
          <Grid item md={6.5}>
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
              {/* <div style={{
                position: 'absolute',
                width: '52.4%',
                height: '50%',
                marginLeft: '32.5%',
                marginTop: '28.15%',
                zIndex: '1',
                cursor: 'pointer',
                borderRadius: "2%", 
                border: '1px solid'
              }}>
                <YouTubePlayer videoId="dQw4w9WgXcQ"/>
              </div> */}
              <iframe
                title="rickroll"
                id="video-player"
                width= '52.4%'
                height= '50%'
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allowFullScreen
                style={{
                  position: "absolute",
                  marginLeft: '32.5%',
                  marginTop: '28.15%',
                  zIndex: "1",
                  borderRadius: "2%",
                }}
              ></iframe>
                {/* <div
                  onClick={e => {
                    e.target.style.display = "none";
                    const iframe = document.getElementById("video-player");
                    iframe.src += "?autoplay=1&mute=1";
                  }} 
                  id="overlay" style={{
                  position: 'absolute',
                  width: '20.7%',
                  height: '27.2%',
                  marginLeft: '50.5%',
                  marginTop: '0.8%',
                  zIndex: '2',
                  cursor: 'pointer'
                }}><img src={myPhoto} style={{width: '100%', height: '100%'}}></img></div> */}
              <IntroSvg/>
            </div>
            </motion.div>
          </Grid>
          <Grid item container direction='column' md={5}>
            <Grid item style={{fontSize: '20px', fontFamily: 'FF-DIN-Pro-Medium', color: '#e5202b'}}>
              Who am I
            </Grid>
            <Grid item style={{marginTop: '16px', marginBottom: '16px', fontSize: '40px', fontFamily: 'FF-DIN-PRO-COND_BOLD', color: fontColor}}>
              Andrew Tran
            </Grid>
            <Grid item style={{marginBottom: '16px', fontSize: '18px', fontFamily: 'FF-DIN-Pro-Medium', color: fontColor}}>
              Full-stack Developer Software Engineer
            </Grid>
            <Grid item>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true }}
                variants={textAnimation}
              >
                <Typography sx={paragraph} align='left'>
                Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora) sou o criador do eFront, um material de ensino de frontend pela internet.
                Atualmente sou freelancer como Frontend Developer e UI Designer.
                Desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO.
                </Typography>
              </motion.div>
            </Grid>
            {/* <Grid item container direction="column">
              <Grid item sx={{marginTop: '15px'}}>
                  <div style={infoRow}>
                    <motion.div whileHover={{ scale: 1.2}}>
                      <div style={circleStyle}>
                        <SpartanSvg sx={{ color: 'rgb(68,69,97)' }}/>
                      </div>
                    </motion.div>
                    <Typography style={info}>Case Western Reserve University</Typography>
                  </div>
              </Grid>
              <Grid item sx={{marginTop: '15px'}}>
                <div style={infoRow}>
                  <motion.div whileHover={{ scale: 1.2}}>
                    <div style={circleStyle}>
                      <ModeIcon sx={{ color: 'rgb(68,69,97)' }}/>
                    </div>
                  </motion.div>
                  <Typography style={info}>Computer Science</Typography>
                </div>
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default IntroContainer;