import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
  import LogoDevIcon from '@mui/icons-material/LogoDev';
import { FontColorContext } from  "../../App";
import { ReactComponent as DiscordSvg } from '../../Asset/Discord.svg';
const Footer = () => {
  const fontColor = useContext(FontColorContext);
  return (
    <Grid container direction='column' sx={{backgroundColor: fontColor === 'white' ? '#151515' : '#F7F7FF', paddingTop: '96px'}}>
      <Grid item xs={4}  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography
            sx={{
              fontSize: "48px",
              color: fontColor,
              fontWeight: 'bold',
              fontFamily: 'Ubuntu, sans-serif'
            }}
          >
            Before you go
          </Typography>
          {/* <IconButton
            variant="outlined"
            sx={{
              color: '#707088'
            }}
            href="mailto:andrewtran1720@gmail.com"
          >
            <EmailOutlinedIcon sx={{ fontSize: '50px' }}/>
          </IconButton> */}
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: fontColor, paddingBottom: '10px'}}>
        <div style ={{width: '50%', textAlign: 'center'}}>
        Let me know more about you.
        It’s always fascinating to see how two consciousnesses share their narratives and the profound dictionaries they’ve crafted to make sense of their respective surroundings.
            Checkout some of these tracks
        </div>
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{ width: '30%', height: '100px', margin: '10px' }}>
        <iframe title="music track" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg?utm_source=generator" width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div style={{ width: '30%', height: '100px', margin: '10px' }}>
        <iframe title="music track" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/3bXH9y487cnLfA6VWXefaB?utm_source=generator" width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div style={{ width: '30%', height: '100px', margin: '10px' }}>
        <iframe title="music track" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/07qhJwWDX3HEzuuY55x3P4?utm_source=generator" width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

      </Grid>
      <Grid item>
        <div style={{ textAlign: "center" }}>
          <IconButton
            variant="outlined"
            sx={{
              color: fontColor
            }}
            href="https://www.linkedin.com/in/tran-anh-quan/"
          >
            <LinkedInIcon sx={{ fontSize: '30px' }}/>
          </IconButton>
          <IconButton
            variant="outlined"
            sx={{
              color: fontColor,
              fill: fontColor
            }}
            href="https://github.com/andrewdev1720"
          >
            <GitHubIcon sx={{ fontSize: '30px', fill: fontColor }}/>
          </IconButton>
          <IconButton
            variant="outlined"
            sx={{
              color: fontColor
            }}
            href="https://dev.to/andrewtran"
          >
            <LogoDevIcon sx={{ fontSize: '30px' }}/>
          </IconButton>
          <IconButton
            variant="outlined"
            sx={{
              color: fontColor
            }}
            href="mailto:andrewtran1720@gmail.com"
          >
            <EmailOutlinedIcon sx={{ fontSize: '30px' }}/>
          </IconButton>
          <IconButton
            variant="outlined"
            sx={{
              color: fontColor,
              fill: fontColor
            }}
            href="mailto:qat3@case.edu"
          >
            <DiscordSvg sx={{ fontSize: '30px' }}/>
          </IconButton>
        </div>
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#4C4C4C', paddingBottom: '10px'}}>
        <div style ={{width: '40%', textAlign: 'center'}}>
          © 2023 Andrew Tran
        </div>
      </Grid>
    </Grid>
  )
};

export default Footer;