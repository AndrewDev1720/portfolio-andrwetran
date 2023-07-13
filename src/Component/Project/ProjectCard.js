import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import LaunchIcon from '@mui/icons-material/Launch';
import { FontColorContext } from '../../App';
import GithubButton from './GithubButton';

const ProjectCard = (props) => {
  const { project } = props;
  const [hovered, setHovered] = useState(false);
  const fontColor = useContext(FontColorContext);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
    >
      <Grid
        container
        sx={{
          padding: '30px',
          backgroundColor: fontColor === 'white' ? '#151515' : '#F7F7FF',
          // height: '380px',
          position: 'relative',
          borderRadius: '6px', 
          border: '1px solid #d0d7de'
        }}
        // onMouseOver={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
        // onClick={() => window.open("https://github.com/diepanh04", "_blank")}
      >
        <Grid item container>
          <Grid item xs={1}>
            <CollectionsBookmarkIcon sx={{ fontSize: '35px', color: fontColor }}/>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '600',
                color: fontColor,
                fontFamily: '-apple-system'
              }}
            >
              {project.title}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            marginTop: '15px',
            // height: '140px',
            color: 'rgb(65,65,90)',
          }}
        >
          <Typography style={{ fontFamily: 'Ubuntu, sans-serif', paddingBottom: '16px' }}>{project.description}</Typography>
          <GithubButton/>
          <hr style={{marginTop: '16px', marginBottom: '16px'}}/>
        </Grid>
        <Grid
          item
          sx={{
            // marginTop: '15px',
            // maxWidth: '300px',
            color: 'rgb(51,63,74)',
            fontFamily: 'Ubuntu, sans-serif'
          }}
        >
          {project.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                marginRight: '5px',
                marginBottom: '5px',
                color: 'black',
                backgroundColor: '#E4E4EB',
                fontFamily: 'Ubuntu, sans-serif'
              }}
            ></Chip>
          ))}
        </Grid>

        {/* {hovered && (
          <Grid
            container
            sx={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <LaunchIcon sx={{ fontSize: '35px', color: 'white' }}/>
          </Grid>
        )} */}
      </Grid>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
