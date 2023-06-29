import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Box } from '@mui/material/';
import myphoto from '../../Asset/Taq2.jpg';
import "./AboutMe.css";
import { FontColorContext } from  "../../App";
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
        maxWidth: '600px',
        margin: '10 auto',
        // backgroundColor: '#e5202b',
        backgroundColor: '#0F6BA8',
        padding: '10px',
        clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
      }}
    >
        <Typography
          sx={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Ubuntu, sans-serif',
            width: '100%'
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </Typography>
      </Box>
    </Grid>
  );
}

export default AboutMe;