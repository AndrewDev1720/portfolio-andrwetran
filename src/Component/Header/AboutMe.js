import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Box } from '@mui/material/';
import myphoto from '../../Asset/Taq2.jpg';
import "./AboutMe.css";
import { FontColorContext } from  "../../App";
import CutCorners from './CutCorners';
const paragraph = {
  fontSize: '18px',
  color: 'rgb(54,55,78)',
  width: '80%',
  fontFamily: 'Ubuntu, sans-serif'
}
const AboutMe = () => {
  const fontColor = useContext(FontColorContext);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: fontColor,
            fontSize: '100px',
            fontStyle: 'italic',
            fontFamily: 'FF-DIN-PRO-COND_BOLD',

          }}
          className="gradiant-color"
        >
          ANDREW TRAN
        </Typography>
      </Grid>
      <Box
        sx={{
          maxWidth: '750px',
          margin: '10 auto',
          backgroundColor: '#F7F7FF',
          borderRadius: '6px', 
          // border: '1px solid #d0d7de',
          // backgroundColor: '#6C63FF',
          padding: '10px',
          // clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: '20px',
            fontFamily: 'Ubuntu, sans-serif',
            width: '100%'
          }}
        >
          As a full-stack software engineer, curiosity is my driving force to explore the world and 
          make meaningful connections along the way using technology. 
          I hope my journey will make a positive impact on those who are in need.
        </Typography>
      </Box>
      {/* <CutCorners>Hello World </CutCorners> */}
    </Grid>
  );
}

export default AboutMe;