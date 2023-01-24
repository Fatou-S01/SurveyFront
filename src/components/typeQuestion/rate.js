import React from 'react';
import Rating from '@mui/material/Rating';
import '../question/question.css';
import './CSS/typeQuestion.css'

function Rate1({value,style}){
  const [value1, setValue] = React.useState(2);
  return(
    <>
       <div style={style}>
   <p >{value}</p>
    <Rating
        name="simple-controlled"
        value={value1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx = {{marginTop:'10px', color: '#2a9e9e'}}
      />
      
      </div>
    </>
  )
}

export {Rate1}