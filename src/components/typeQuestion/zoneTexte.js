import React, { useEffect } from 'react';
import '../question/question.css';

function ZoneTexte({value, style}){
  return(
    <>
    <div style={style}>
      <p >{value}</p>
    <input value={""} className='question' required></input>
    </div>

   
    </>
  )
}


export {ZoneTexte}