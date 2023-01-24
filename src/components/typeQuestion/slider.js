import React from 'react';
import '../question/question.css';
import './CSS/typeQuestion.css'
import Slider from '@mui/material/Slider';

function Slider1({value, style}){
  return(
    <>
    <div style={style}>
    <p >{value}</p>
    <Slider defaultValue={20} aria-label="Default" valueLabelDisplay="auto" size= 'large' sx = {{color: '#2a9e9e', width : '50%'}}/>
    </div>
    </>
  )
}

export {Slider1}