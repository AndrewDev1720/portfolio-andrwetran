import React, { useState, useContext } from 'react';
import { Container } from '@mui/material';
import { motion } from "framer-motion";
import { FontColorContext } from '../../App';
import ProjectCard from './ProjectCard';
import ProjectContainer from './ProjectContainer';
import { Diversity1 } from '@mui/icons-material';
const Project = () => {
  const fontColor = useContext(FontColorContext);
  const backgroundStyle={
    backgroundColor: fontColor === 'white' ? '#0D0B0D' : 'white',
    paddingTop: '96px',
    paddingBottom: '96px'
  }
  return(
    <div style={backgroundStyle}>
      <div style={{marginLeft: '7%', marginRight: '7%'}}>
        <ProjectContainer/>
      </div>
    </div>
  )
}

export default Project;