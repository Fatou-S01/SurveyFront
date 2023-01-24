import {React,useEffect,useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import { ViewAperçu } from '../../components/ViewAperçu';
import {useQuery} from "@tanstack/react-query";
import axios from 'axios';
import { Slider1 } from '../../components/typeQuestion/slider';
import { Rate1 } from '../../components/typeQuestion/rate';
import { DatePicker1 } from '../../components/typeQuestion/datepicker';
import { MultipleChoice } from '../../components/typeQuestion/multiplechoice';
import { ZoneTexte } from '../../components/typeQuestion/zoneTexte';
import '../../components/question/question.css';
import '../../components/typeQuestion/CSS/typeQuestion.css'
/*import Slider from '@mui/material/Slider';*/
import { Rate } from 'antd';
import { DatePicker, Space } from 'antd';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Range } from 'react-range';

function RepondreSondage(){
  const params = useParams();
  const navigate = useNavigate();
 /* useEffect(() => {
    const test = document.getElementsByClassName('paragraphe');
    console.log(test[7].children[1].value);
  },[])*/

  const [option1_value, SetOption1_value] = useState([]);
  const [option2_value, SetOption2_value] = useState([]);

 /* const AddOption = () => {
    const test = numberO + 1;
    SetOption_item([...option_item,test]);
  }*/
  const [valueChoice, setValueChoice] = useState('');

  const handleChange = (event) => {
    setValueChoice(event.target.value);
  };
  /* Zone de texte value*/
  const [input_value, SetInput_value] = useState('');
  /*rate*/ 
  const [value1, setValue1] = useState(0);
  /*date*/
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  /*slider*/
  const [valueS, setValueSlider] = useState(20);
  
 /* const { data,isLoading} = useQuery(["sondage"], () => {
    return axios.get(`http://localhost:4030/api/sondages/${params.id_sondage}`).then((response) => 
        response.data.sondage
  );
});
if(isLoading){
    return <h3>Loading</h3>;
}*/
const { data,isLoading} = useQuery(["question"], () => {
  return axios.get(`http://127.0.0.1:4030/api/questions/questionsSondage/${params.id_sondage}`).then((response) => 
      response.data.question
);
});
if(isLoading){
  return <h3>Loading</h3>;
}
/*const handleSubmit = (event) => {
  event.preventDefault()

  /*axios.post("http://localhost:4030/api/reponseQuestion/createReponseQuestion",
  { 
    intituleReponse: "first_name",
    questionId: "last_name",
  }).then((response) => {
   

  });

}*/
/* slider */
const handleSliderChange = (event, newValue) => {
  setValueSlider(newValue);
};


  return(
    <>
    <div> <h2 className='sign_in' ><i id='logo228' style= {{fontSize:'25px'}}>Faki</i><i id='logo118' style= {{fontSize:'25px'}}>Survey</i></h2></div>
    <div style = {{textAlign:'center'}}>Description: {'data.description'}</div>
    <div style={{display: 'flex', justifyContent:'center',marginTop:'15px'}}>
    <form>
   
    <div>
    {
        Object.entries(data).map(([key,value]) => {
          if(value.typeQuestion == 'zoneTexte'){
          return  <div className='paragraphe'>
          <p >{value.intituleQuestion}</p>
        <input className='question' ></input>
        </div>
      }
      else if(value.typeQuestion == 'slider'){
        return <> 
        <div className='paragraphe'>
        <p >{value.intituleQuestion}</p>
       
        </div>
        </>
      }
      else if(value.typeQuestion == 'rate'){
        return <>
        <div className='paragraphe'>
    <p >{value.intituleQuestion}</p>
    <Rate onChange={setValue1} value={value1} />
       
       </div>
     </>
      }
      else if(value.typeQuestion == 'datepicker'){
        return    <>
        <div className='paragraphe'>
        <p >{value.intituleQuestion}</p>
          <Space direction="vertical">
        <DatePicker onChange={onChange} sx = {{marginTop:'10px'}}/>
      </Space>
      </div>
    
        </>
      }
      else{
        return     <div>
        <p >{value.intituleQuestion}</p>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value={option1_value} control={<Radio />} label={1} />
            <FormControlLabel value={option2_value} control={<Radio />} label={2} />
      
          </RadioGroup>
        </FormControl>
        </div>
      }
      })
      }
    </div>
    <div style={{display:'flex',justifyContent:'center', marginTop:'15px'}}>
    <button style= {{color: '#fff', backgroundColor: '#2a9e9e', borderStyle: 'solid',borderRadius: '6px',borderColor:'#2a9e9e', height: '30px',width:'100px'}}>Envoyer</button>
    </div>
    </form>
     
    </div>
  
    
   
    </>
  )
}
const Option1 = (id_question) => {
  let list_option = [];
 

 /* axios.get(`http://127.0.0.1:4030/api/optionReponse/questionOptionReponse/${value._id}`).then((response) => {
    for(let i = 0; i < (response.data.optionReponse).length; i++){
      list_option.push((response.data.optionReponse)[i].intituleOption)
      
    }
})*/

 axios.get(`http://127.0.0.1:4030/api/optionReponse/questionOptionReponse/${id_question}`).then((response) => 
{
  //console.log(response.data.optionReponse[0].intituleOption)
  // list_option = response.data.optionReponse.map((option,index)=> {
  //   return option.intituleOption 
  // })
  for(let option of response.data.optionReponse){
    list_option.push(option.intituleOption)
  }
})
  console.log(list_option)
  return list_option
}

export {RepondreSondage,Option1};