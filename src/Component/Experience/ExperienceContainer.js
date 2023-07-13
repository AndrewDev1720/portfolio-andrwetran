import React, { useState, useContext } from 'react';
import { Typography, Container } from '@mui/material';
import TwoColumnComponent from './TwoColumnComponent';
import { FontColorContext } from '../../App';
const ExperienceContainer = () => {
  const experienceData = [
    { name: 'Introduction', id: 'introduction', duration: '500'},
    { name: 'Experience', id: 'experience', duration: '700'},
    { name: 'Projects', id: 'projects', duration: '800'},
    { name: 'Activities', id: 'activities', duration: '1000'},
    { name: 'My Tech', id: 'tech', duration: '1000'},
  ];
  const fontColor = useContext(FontColorContext);
  return(
    <div>
      <Container>
        <Typography
          sx={{
            fontSize: '50px',
            fontWeight: 'bold',
            color: fontColor,
            fontFamily: 'FF-DIN-PRO-COND_BOLD',
            fontStyle: 'italic',
            paddingBottom: '30px',
          }}
        >
            Experience
        </Typography>
        <TwoColumnComponent />
      </Container>
    </div>
  )
  }
export default ExperienceContainer;