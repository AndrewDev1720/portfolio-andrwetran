import React, { useState, useContext } from 'react';
import { FontColorContext } from '../../App';
import Button from '@mui/material/Button';
import { ReactComponent as GithubIconSvg } from '../../Asset/GitHub2.svg';

const GithubButton = (props) => {
  const fontColor = useContext(FontColorContext);
  const ButtonStyle={
    marginLeft: '8px',
    marginRight: '8px',
    textTransform: 'none',
    ':hover': {
      backgroundColor: '#e5202b',
      color: 'white',
      fill: 'white',
      borderColor: '#d0d7de'
    },
    fontSize: '16px',
    color: fontColor,
    borderColor: '#d0d7de',
    backgroundColor: fontColor === 'white' ? 'black' : 'white',
    fill: fontColor
  }
  return(
    <div>
      <Button variant="outlined" disableElevation="true" sx = {ButtonStyle}>
        <GithubIconSvg/>
        Clone Project 
      </Button>
      <Button variant="outlined" sx = {ButtonStyle}>
        <GithubIconSvg/>
        Repo 
      </Button>
      {/* <Button variant="outlined" sx = {ButtonStyle}>
        <GithubIconSvg/>
        Star 
      </Button> */}
      <Button variant="outlined" sx = {ButtonStyle}>
        Demo
      </Button>
    </div>
  )
}
export default GithubButton;