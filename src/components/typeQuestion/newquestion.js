import React from 'react';
import { Slider1 } from "../typeQuestion/slider";
import './CSS/typeQuestion.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import '../question/question.css';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import { Rate1 } from "../typeQuestion/rate";
import { MultipleChoice } from "../typeQuestion/multiplechoice";
import { DatePicker1 } from "../typeQuestion/datepicker";
import { DatePicker, Space } from 'antd';
import { Checkbox1 } from "../typeQuestion/checkbox";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ZoneTexte } from "../typeQuestion/zoneTexte";
import { Option } from '../typeQuestion/multiplechoice';
import { FaTrash } from "react-icons/fa";
import { FaRegEdit} from "react-icons/fa";
import axios  from 'axios';
import {useNavigate,useParams} from 'react-router-dom';
import { ViewAperçu } from '../ViewAperçu';


var numberO = 0;
function NewQuestion(){

  const params = useParams();

  const [type, setType] = React.useState('zoneTexte');
  const [active, setActive] = React.useState(0);
  const [input_value, SetInput_value] = React.useState("");
  const [slider_value, SetSlider_value] = React.useState("");
  const [rate_value, setRateValue] = React.useState("");
  const [date_value, setDateValue] = React.useState("");
  const [value1, setValue] = React.useState(2);

  /* Multiple Choice */
  const [option_item, SetOption_item] = React.useState([]);
  const [choice_value, SetChoice_value] = React.useState([]);
  const [check_value, SetCheck_value] = React.useState([]);
  const [option1_value, SetOption1_value] = React.useState([]);
  const [option2_value, SetOption2_value] = React.useState([]);
  const [option3_value, SetOption3_value] = React.useState([]);

  /*obligatoire*/
  const [required, setRequired] = React.useState(false);
  const handleChangeR = (event) => {
    setRequired(event.target.checked);
  };



  /*Modifier*/
  const [update, setUpdate] = React.useState(0);

  const AddOption = () => {
    const test = numberO + 1;
    SetOption_item([...option_item,test]);
  }

  const handleChange = (event) => {
    setType(event.target.value);
  };

  /*post Question*/
  const saveQuestion = () => {
    const list_option = [option1_value, option2_value]
    const list_option1 = [option1_value, option2_value,option3_value]
    if(type == 'zoneTexte' || type == 'rate' || type == 'slider' || type == 'datepicker'){
      axios.post("http://127.0.0.1:4030/api/questions/createQuestion",
      { 
          sondageId: params.id_sondage,
          intituleQuestion: (type == "zoneTexte" ? input_value : type == 'rate' ? rate_value : type == 'slider' ? 
          slider_value : type == 'datepicker' ? date_value : ""
          ),
          typeQuestion: type,
          obligatoire: required,
      }).then((response) => {});
  }
  else if(type == 'multipleChoice'){
    axios.post("http://127.0.0.1:4030/api/questions/createQuestion",
      { 
          sondageId: params.id_sondage,
          intituleQuestion: choice_value,
          typeQuestion: 'Multiple Choice',
          obligatoire: required,
      }).then((response) => {
        for(let i = 0; i < list_option.length; i++){
          axios.post("http://127.0.0.1:4030/api/optionReponse/createOptionReponse",
          { 
              questionId: (response.data).createdQuestion._id,
              intituleOption: list_option[i],
              index: i + 1
          })
        }

      });
  }
  else{
    axios.post("http://127.0.0.1:4030/api/questions/createQuestion",
      { 
          sondageId: params.id_sondage,
          intituleQuestion: check_value,
          typeQuestion: 'Checkbox',
          obligatoire: required,
      }).then((response) => {
        for(let i = 0; i < list_option1.length; i++){
          axios.post("http://127.0.0.1:4030/api/optionReponse/createOptionReponse",
          { 
              questionId: (response.data).createdQuestion._id,
              intituleOption: list_option[i],
              index: i + 1
          })
        }

      });
  }
  setActive(1);
    }
    
  

  return(
    <>
    {
      active == 0 ? <div> <div className='div_input'>
      {type == 'zoneTexte' ? <input className='question' value={input_value} onChange={(e) => {SetInput_value(e.target.value)}}>

      </input> :  type == 'rate' ? 
      <>
      
      <div className='type'>
      <input className='question' value={rate_value} onChange={(e) => {setRateValue(e.target.value)}}></input>
      <Rating
          name="simple-controlled"
          value={value1}
          onChange={(event, newValue) => {
            setValue(newValue);}}
          sx = {{marginTop:'10px', color: '#2a9e9e'}}
        />
        
        </div>
      </> : type == 'slider' ? <>
    <div className='type'>
    <input className='question' value={slider_value} onChange={(e) => {SetSlider_value(e.target.value)}} ></input>
    <Slider defaultValue={20} aria-label="Default" valueLabelDisplay="auto" size= 'large' sx = {{marginTop:'10px', color: '#2a9e9e'}}/>
    </div>
    </> : type == "datepicker" ? 
        <>
        <div className='type'>
          <input className='question' value={date_value} onChange={(e) => {setDateValue(e.target.value)}}></input>
          <Space direction="vertical">
        <DatePicker/>
      </Space>
      </div>
        </> : type == 'multipleChoice' ?
        <>
        <div className='type'>
        <input className='question' value={choice_value} onChange={(e) => {SetChoice_value(e.target.value)}}></input>
        <input placeholder='Option de réponse' value={option1_value} onChange={(e) => {SetOption1_value(e.target.value)}}style = {{marginTop: '20px',width:'40%', height:'25px', borderColor: '#2a9e9e', borderWidth: '1px', borderStyle: 'solid', borderRadius:'5px'}}></input>
        <input placeholder='Option de réponse' value={option2_value} onChange={(e) => {SetOption2_value(e.target.value)}}style = {{marginTop: '7px',width:'40%', height:'25px', borderColor: '#2a9e9e', borderWidth: '1px', borderStyle: 'solid', borderRadius:'5px'}}></input>
        <input placeholder='Option de réponse' value={option3_value} onChange={(e) => {SetOption3_value(e.target.value)}}style = {{marginTop: '7px',width:'40%', height:'25px', borderColor: '#2a9e9e', borderWidth: '1px', borderStyle: 'solid', borderRadius:'5px'}}></input>
        {
          option_item.map((index) =>  <Option key = {index}/>)
        }
        <button onClick={AddOption} style={{width: '20%',marginTop: '7px',borderColor: '#2a9e9e', borderWidth: '1px', borderStyle: 'solid',borderRadius:"30px", color:"#2a9e9e", backgroundColor: "#f5f5f5"}}>Plus d'option</button>
        </div>
        </> : 
        <>
        <div className='type'>
        <input className='question' value={check_value} onChange={(e) => {SetCheck_value(e.target.value)}}></input>
        <input placeholder='Option de réponse' value={option1_value} onChange={(e) => {SetOption1_value(e.target.value)}}style = {{marginTop: '20px',width:'40%', height:'25px', borderColor: '#2a9e9e', borderWidth: '1px', borderStyle: 'solid', borderRadius:'5px'}}></input>
        <input placeholder='Option de réponse' value={option2_value} onChange={(e) => {SetOption2_value(e.target.value)}}style = {{marginTop: '7px',width:'40%', height:'25px', borderColor: '#2a9e9e', borderWidth: '1px', borderStyle: 'solid', borderRadius:'5px'}}></input>
        <input placeholder='Option de réponse' value={option3_value} onChange={(e) => {SetOption3_value(e.target.value)}}style = {{marginTop: '7px',width:'40%', height:'25px', borderColor: '#2a9e9e', borderWidth: '1px', borderStyle: 'solid', borderRadius:'5px'}}></input>
        {
          option_item.map((index) =>  <Option key = {index}/>)
        }
        <button onClick={AddOption} style={{width: '20%',marginTop: '7px',borderColor: '#2a9e9e', borderWidth: '1px', borderStyle: 'solid',borderRadius:"30px", color:"#2a9e9e", backgroundColor: "#f5f5f5"}}>Plus d'option</button>
        </div>
        </>
        }
      <div >
          <FormControl sx={{ height: '10px'}} >
            <InputLabel id="demo-simple-select-label" sx={{ width: '500px'}} ></InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="TypeQuestion"
              onChange={handleChange}
              sx={{ height: '1.9rem',width: '190px',backgroundColor:'#2a9e9e', color:'#fff',borderColor:'#2a9e9e' }}
            >
              <MenuItem value={'multipleChoice'}>Multiple choice</MenuItem>
              <MenuItem value={'checkbox'}>Checkbox</MenuItem>
              <MenuItem value={'zoneTexte'}>Zone de texte</MenuItem>
              <MenuItem value={'datepicker'}>Date</MenuItem>
              <MenuItem value={'rate'}>Rate</MenuItem>
              <MenuItem value={'slider'}>Slider</MenuItem>
            </Select>
          </FormControl>
     

    </div>
    <div style= {{marginTop: '40px', marginRight: '10px'}}>
    <button onClick={saveQuestion} style= {{color: '#2a9e9e', backgroundColor: '#fff', borderStyle: 'none',borderRadius: '20px', height: '25px'}}>Enregistrer</button>
    
    </div>
    <div style= {{marginTop: '40px', marginRight: '10px'}}>
    <button onClick={() => {setActive(1)}} style= {{color: '#fff', backgroundColor: '#2a9e9e', borderStyle: 'none',borderRadius: '20px', height: '25px'}}>Annuler</button>
    </div>
    </div>
     <div>
     <FormGroup >
       <FormControlLabel control={<Switch onChange={handleChangeR}/>} label="Obligatoire" />
     </FormGroup>
     </div>
     </div>
    : (active == 1 && type == 'zoneTexte') ? <><ZoneTexte value={input_value} style={{display: update == 1 ? "none": "visible"}}/>
    <FaRegEdit onClick={() => {setActive(0)}} style={{display: update == 1 ? "none": "visible", color:'#333',marginTop:'10px'}} />
    <FaTrash onClick={() => {setUpdate(1)}} style={{display: update == 1 ? "none": "visible",color:'#333',marginLeft: '6px',marginTop:'10px'}}/>
    </>: (active == 1 && type == 'slider') ? 
    <><Slider1 value={slider_value} style={{display: update == 1 ? "none": "visible"}}/>
     <FaRegEdit onClick={() => {setActive(0)}} style={{display: update == 1 ? "none": "visible", color:'#333',marginTop:'10px'}} />
    <FaTrash onClick={() => {setUpdate(1)}} style={{display: update == 1 ? "none": "visible",color:'#333',marginLeft: '6px',marginTop:'10px'}}/></>:(active == 1 && type == 'rate') ?
    <><Rate1 value={rate_value} style={{display: update == 1 ? "none": "visible"}}/> 
   <FaRegEdit onClick={() => {setActive(0)}} style={{display: update == 1 ? "none": "visible", color:'#333',marginTop:'10px'}} />
    <FaTrash onClick={() => {setUpdate(1)}} style={{display: update == 1 ? "none": "visible",color:'#333',marginLeft: '6px',marginTop:'10px'}}/></>:(active == 1 && type == 'datepicker') ?
    <><DatePicker1 value={date_value} style={{display: update == 1 ? "none": "visible"}}/>
     <FaRegEdit onClick={() => {setActive(0)}} style={{display: update == 1 ? "none": "visible", color:'#333',marginTop:'10px'}} />
    <FaTrash onClick={() => {setUpdate(1)}} style={{display: update == 1 ? "none": "visible",color:'#333',marginLeft: '6px',marginTop:'10px'}}/></>:(active == 1 && type == 'multipleChoice') ?
    <><MultipleChoice style={{display: update == 1 ? "none": "visible"}} value1={choice_value} optionValue1 = {option1_value} optionValue2={option2_value}/>
<FaRegEdit onClick={() => {setActive(0)}} style={{display: update == 1 ? "none": "visible", color:'#333',marginTop:'10px'}} />
    <FaTrash onClick={() => {setUpdate(1)}} style={{display: update == 1 ? "none": "visible",color:'#333',marginLeft: '6px',marginTop:'10px'}}/></>:
<>
<Checkbox1 style={{display: update == 1 ? "none": "visible"}} value1={check_value} optionValue1 = {option1_value} optionValue2={option2_value} optionValue3={option3_value}/>
<FaRegEdit onClick={() => {setActive(0)}} style={{display: update == 1 ? "none": "visible", color:'#333',marginTop:'10px'}} />
    <FaTrash onClick={() => {setUpdate(1)}} style={{display: update == 1 ? "none": "visible",color:'#333',marginLeft: '6px',marginTop:'10px'}}/>
</>
    }
    </>
  )
}
export {NewQuestion}