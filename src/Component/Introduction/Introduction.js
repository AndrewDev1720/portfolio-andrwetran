import React, { useState, useContext } from 'react';
import { Container } from '@mui/material';
import IntroContainer from './IntroContainer';
import { motion } from "framer-motion";
import { FontColorContext } from '../../App';
const Introduction = (props) => {
  const fontColor = useContext(FontColorContext);
  const backGroundStyle={
    display: 'flex',
    paddingTop: '50px',
    // backgroundColor: '#EDF9FE',
    // backgroundColor: fontColor === 'white' ? '#151515' : '#fbfbff',
    backgroundColor: fontColor === 'white' ? '#0D0B0D' : '#FFFDFF',
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
        <Container style={{padding: '0'}}>
            <IntroContainer/>
        </Container>
      </div>
    </motion.div>
  )
};
export default Introduction;