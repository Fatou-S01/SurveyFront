import React from 'react';
import { Navbar } from '../../../components/navbar';
import { ProgressBar } from '../../../components/progressBar';
import { Banque } from '../../../components/banqueDonnees';
import { Question } from '../../../components/question';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Sondage(){
  return(
  <>
    <Navbar step1={0}/>
  
    <Question/>
  

  </>
  )
}
export default Sondage;