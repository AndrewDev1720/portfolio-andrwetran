import React, { useState, useContext, useEffect } from 'react';
import { motion } from "framer-motion";
import ProjectCard from './ProjectCard';
import { Grid, Typography, Chip } from '@mui/material';
import demoPhoto from '../../Asset/University.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { FontColorContext } from '../../App';

const projects = [
  // {
  //   title: 'YouTube_Explorer',
  //   image: demoPhoto,
  //   skills: ['Javascript', 'ReactJS', 'NodeJS', 'Express', 'PostgreSQL', 'Firebase'],
  //   description: 'A work in progress: An online platform for podcast lovers to come together and share their favourite podcasts. The website includes features such as podcast recommendations, favourite list, episode notes, ...'
  // },
  { 
    title: 'YouTube_Explorer',
    image: demoPhoto,
    skills: ['HTML', 'CSS', 'Javascript', 'JQuery', 'AJAX', 'API'],
    description: 'A web application that displays stock information combining 5 Polygon API endpoints given user input. The program saves all search history to OpenStack and display it by date using SQL.'
  },
  { 
    title: 'Path_Finder',
    image: demoPhoto,
    skills: ['Bootstrap', 'Ruby on Rails', 'PostgreSQL'],
    description: 'A web application inspired by GoodRead that allows users to save movies to WatchList. The website categorizes and shows movie information with other features such as user log-in and movie rating.',
  },
  { 
    title: 'FaceBook_Simulator',
    image: demoPhoto,
    skills: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'API', 'Firebase'],
    description: 'A social media web application simulating Facebook. Implemented sign-up, sign-in, post, comment, and like features for multiple user interactions.',
  },
  { 
    title: 'Flight_Booker',
    image: demoPhoto,
    skills: ['Bootstrap', 'Ruby on Rails', 'PostgreSQL'],
    description: 'A flight-booking online service application that contains 5000+ flights information. Integrated Sendgrid email service to send confirmation email to users for each booking.',
  },
];

const ProjectContainer = () => {
  const fontColor = useContext(FontColorContext);
  const heading = {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '3%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  }
  const animation = {
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

  return (
    <motion.div
      id="projects"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true }}
      variants={animation}  
    >
      <div style={heading}>
        <motion.div
            whileHover={{ rotate: 180 }}
          >
            {/* <DashboardIcon sx={{ fontSize: '40px', color: 'rgb(68,69,97)' }}/> */}
        </motion.div>
        <Grid container direction = 'column'>
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: fontColor,
              fontFamily: 'Ubuntu, sans-serif',
              textAlign: 'center'
            }}
          >
            My Projects
          </Typography>
          <hr style={{ width: '30%', marginTop: '10px', borderColor: '#e5202b' }} />
        </Grid>
      </div>
      <Grid container spacing={5} >
        {projects.map((project, index) => (
          <Grid item xs={6} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default ProjectContainer;
