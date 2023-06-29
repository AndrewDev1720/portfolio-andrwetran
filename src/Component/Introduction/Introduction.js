import React, { useState, useContext } from 'react';
import { Container } from '@mui/material';
import AboutMeContainer from './IntroContainer';
import { motion } from "framer-motion";
import { FontColorContext } from '../../App';
const Introduction = (props) => {
  const fontColor = useContext(FontColorContext);
  const backGroundStyle={
    display: 'flex',
    // backgroundColor: '#EDF9FE',
    backgroundColor: fontColor === 'white' ? '#687377' : '#EDF9FE',
    minHeight: '100vh',
    width: '100%',
  }
  return(
    <motion.div
    id="introduction"
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{ once: true }}
    >
      <div style={backGroundStyle}>
        <AboutMeContainer/>
      </div>
    </motion.div>
  )
};
export default Introduction;