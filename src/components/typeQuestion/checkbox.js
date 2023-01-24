import React from 'react';
import '../question/question.css';
import './CSS/typeQuestion.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

var numberO = 0;
function Checkbox1({value1, optionValue1, optionValue2,optionValue3,style}){
  const [option_item, SetOption_item] = React.useState([]);
  const [choice_value, SetChoice_value] = React.useState([]);
  const [option1_value, SetOption1_value] = React.useState([]);
  const [option2_value, SetOption2_value] = React.useState([]);
  const [option3_value, SetOption3_value] = React.useState([]);

 /* const AddOption = () => {
    const test = numberO + 1;
    SetOption_item([...option_item,test]);
  }*/
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return(
    <>
    <div style ={style}>
    <p >{value1}</p>
    <FormGroup>
      <FormControlLabel value={option1_value} control={<Checkbox  />} label={optionValue1} />
      <FormControlLabel value={option2_value}  control={<Checkbox />} label={optionValue2} />
      <FormControlLabel value={option3_value} control={<Checkbox />} label={optionValue3} />
    </FormGroup>
    </div>
    </>
  )
}
export {Checkbox1}
