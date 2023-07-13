import React from 'react';
import { motion } from "framer-motion";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoDevIcon from '@mui/icons-material/LogoDev';

const Footer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography
        sx={{
          fontSize: "50px",
          color: '#707088',
          fontFamily: 'Ubuntu, sans-serif'
        }}
      >
        Let's Chat!
      </Typography>
      <IconButton
        variant="outlined"
        sx={{
          color: '#707088'
        }}
        href="https://www.linkedin.com/in/diep-anh-nguyen/"
      >
        <LinkedInIcon sx={{ fontSize: '50px' }}/>
      </IconButton>
      <IconButton
        variant="outlined"
        sx={{
          color: '#707088'
        }}
        href="https://github.com/diepanh04"
      >
        <GitHubIcon sx={{ fontSize: '50px' }}/>
      </IconButton>
      <IconButton
        variant="outlined"
        sx={{
          color: '#707088'
        }}
        href="https://dev.to/diepanh04"
      >
        <LogoDevIcon sx={{ fontSize: '50px' }}/>
      </IconButton>
      <IconButton
        variant="outlined"
        sx={{
          color: '#707088'
        }}
        href="mailto:ashleydiepanhnguyen@gmail.com"
      >
        <EmailOutlinedIcon sx={{ fontSize: '50px' }}/>
      </IconButton>
    </div>
  )
};

export default Footer;