import React, { useState, useContext, useEffect } from 'react';
import { AppBar, Toolbar, Grid, MenuItem} from '@mui/material/';
import myLogo from '../../Asset/Spades.jpg';
import myLogo2 from '../../Asset/Logo2.jpg';
import myLogo3 from '../../Asset/Logo3.jpg';
import { Link } from 'react-scroll';
import SvgIcon from './SvgIcon';
import { ReactComponent as DevSvg } from '../../Asset/Dev_Icon.svg';
import { ReactComponent as LinkedInSvg } from '../../Asset/LinkedIn.svg';
import { ReactComponent as GitHubSvg } from '../../Asset/GitHub.svg';
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
  return (
    <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 2, backgroundColor: scrollPosition > 0 ? reverseFontColor : 'transparent', transition: 'background-color 0.4s ease'}}>
      <Grid container sx={containerStyle}>
        <Grid item md={5} sm={6} sx={gridItemStyleStart}>
          <ThemeSlider onThemeChange={props}/>
          <SvgIcon class="header__icon" width="30" height="30">
            <LinkedInSvg />
          </SvgIcon>
          <SvgIcon class="header__icon" width="30" height="30">
            <GitHubSvg />
          </SvgIcon>
          <SvgIcon class="header__icon">
            <DevSvg width="30" height="30"/>
          </SvgIcon>
          <SvgIcon class="header__icon" width="30" height="30">
            <DiscordSvg />
          </SvgIcon>
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
              offset={-36}
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
