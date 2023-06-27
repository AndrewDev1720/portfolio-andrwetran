import React, { useState, useContext } from 'react';
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
  const [hoveredLink, setHoveredLink] = useState(null);
  const items = [
    { name: 'Introduction', id: 'introduction', duration: '500'},
    { name: 'Experience', id: 'experience', duration: '700'},
    { name: 'Projects', id: 'projects', duration: '800'},
    { name: 'Activities', id: 'activities', duration: '1000'},
    { name: 'My Tech', id: 'tech', duration: '1000'},
  ];
  const containerStyle = {
    paddingLeft:'64px',
    paddingRight:'64px',
    height: '82px',
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
    height: '50px',
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
    <Grid container sx={containerStyle} columns={12}>
      <Grid item sm={5} sx={gridItemStyleStart}>
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
      <Grid item sm={2} sx={gridMiddleStyle}>
        <div style={parallelogram_bg}>
          Hello World
        </div>
      </Grid>
      <Grid item sm = {5} sx={gridItemStyleEnd}>
        {items.map((item) => (
          <Link
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
  );
}
export default NavBar;
