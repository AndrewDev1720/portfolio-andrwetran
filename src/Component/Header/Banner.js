import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Box } from '@mui/material/';
import myphoto from '../../Asset/Taq2.jpg';

const Banner = () => {
  return (
  <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <img
        src={myphoto}
        style={{
          marginTop: '100px',
          width: '300px',
          borderRadius: '50%',
        }}
        alt='logo'
      />
    </motion.div>
  );
};

export default Banner;
