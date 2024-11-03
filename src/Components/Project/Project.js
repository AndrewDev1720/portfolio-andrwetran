import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { FontColorContext } from '../../App';
import ProjectContainer from './ProjectContainer';
const Project = () => {
  const fontColor = useContext(FontColorContext);
  const backgroundStyle={
    backgroundColor: fontColor === 'white' ? '#0D0B0D' : 'white',
    paddingTop: '96px',
    paddingBottom: '96px'
  }
  return(
    <motion.div
    id="projects"
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{ once: true }}
    >
      <div style={backgroundStyle}>
        <div style={{marginLeft: '7%', marginRight: '7%'}}>
          <ProjectContainer/>
        </div>
      </div>
    </motion.div>
  )
}

export default Project;