import React, { useState, useContext, useEffect } from 'react';
import { AppBar, Toolbar, Grid, MenuItem} from '@mui/material/';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-scroll';
import SvgIcon from './SvgIcon';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as DiscordSvg } from '../../Asset/Discord.svg';
import "./navBar.css";
import ThemeSlider from '../Slider/ThemeSlider';
import { FontColorContext } from '../../App';

const NavBar = (props) => {
  const fontColor = useContext(FontColorContext);
  const reverseFontColor = fontColor === 'white' ? '#0D0B0D' : 'white';
  const [hoveredLink, setHoveredLink] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.pageYOffset);
    });
  }, []);
  const items = [
    { name: 'Introduction', id: 'introduction', duration: '500'},
    { name: 'Experience', id: 'experience', duration: '700'},
    { name: 'Projects', id: 'projects', duration: '800'},
    { name: 'My Tech', id: 'tech', duration: '1000'},
  ];
  const containerStyle = {
    paddingLeft:'64px',
    paddingRight:'64px',
    height: scrollPosition > 0 ? '65px' : '82px',
    transition: 'height 0.4s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const menuItemStyle = {
    paddingLeft:'13px',
    paddingRight:'13px',
    paddingTop:'8px',
    paddingBottom:'8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
  }
  const gridItemStyleEnd={
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
  const gridItemStyleStart={
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
  const gridMiddleStyle={
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: scrollPosition > 0 ? '38px' : '50px',
    transition: 'height 0.4s ease',
    backgroundColor: 'transparent',
    color: 'white'
  }
  const parallelogram_bg={
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    transform: 'skew(-20deg)',
    backgroundColor: fontColor,
    color: fontColor === 'black'? 'white' : 'black',
    zIndex: '-1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
  }
  const iconButtonStyle={
    color: fontColor,     
    ':hover': {
      color: 'red',
      fill: 'red',
    }
  }
  return (
    <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 2, backgroundColor: scrollPosition > 0 ? reverseFontColor : 'transparent', transition: 'background-color 0.4s ease'}}>
      <Grid container sx={containerStyle}>
        <Grid item md={5} sm={6} sx={gridItemStyleStart}>
          <ThemeSlider onThemeChange={props}/>
          <IconButton disableRipple={true} sx={iconButtonStyle} href="https://www.linkedin.com/in/tran-anh-quan/" target="_blank">
            <LinkedInIcon sx={{ fontSize: '30px' }}/>
          </IconButton>
          <IconButton disableRipple={true} sx={iconButtonStyle} href="https://github.com/andrewdev1720/" target="_blank">
            <GitHubIcon sx={{ fontSize: '30px' }}/>
          </IconButton>
          <IconButton disableRipple={true} sx={iconButtonStyle} href="https://github.com/andrewdev1720/" target="_blank">
            <LogoDevIcon sx={{ fontSize: '30px' }}/>
          </IconButton>
          <IconButton disableRipple={true} sx={iconButtonStyle} href="https://discord.gg/8BEPYQ7m" target="_blank">
            <DiscordSvg sx={{ fontSize: '30px' }}/>
          </IconButton>
        </Grid>
        <Grid item md={2} sm={0} sx={gridMiddleStyle}>
          <div style={parallelogram_bg}>
            Hello World
          </div>
        </Grid>
        <Grid item md = {5} sm={6} sx={gridItemStyleEnd}>
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-30}
              onMouseEnter={() => setHoveredLink(item.id)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                color: hoveredLink === item.id ? 'red' : fontColor,
                paddingLeft:'13px',
                paddingRight:'13px',
                paddingTop:'8px',
                paddingBottom:'8px',
                fontSize: '1.05rem',
                fontFamily: 'FF-DIN-PRO',
                textAlign: 'center',
                cursor: 'pointer'
              }}
              sx={menuItemStyle}>
              {item.name}
            </Link>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
export default NavBar;
