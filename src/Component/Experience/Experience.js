import React, { useState, useContext } from 'react';
import { Container } from '@mui/material';
import { motion } from "framer-motion";
import { FontColorContext } from '../../App';
import ExperienceContainer from './ExperienceContainer';
const Experience = () => {
  const fontColor = useContext(FontColorContext);
  const backGroundStyle={
    backgroundColor: fontColor === 'white' ? '#151515' : '#f7f7ff',
    paddingTop: '96px',
    paddingBottom: '96px',
    width: '100%',
  }
  return(
    <div style={backGroundStyle}>
      <ExperienceContainer/>
    </div>
  )
}
export default Experience;
