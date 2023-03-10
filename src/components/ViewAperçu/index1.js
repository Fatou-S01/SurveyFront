import {React,useEffect,useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import { ProgressBar } from '../../components/progressBar';
import { Navbar } from '../../components/navbar';
import { Slider1 } from '../../components/typeQuestion/slider';
import { Rate1 } from '../../components/typeQuestion/rate';
import { DatePicker1 } from '../../components/typeQuestion/datepicker';
import { MultipleChoice } from '../../components/typeQuestion/multiplechoice';
import { ZoneTexte } from '../../components/typeQuestion/zoneTexte';
import axios  from 'axios';
import {useQuery} from "@tanstack/react-query";
import { NewQuestion } from '../typeQuestion/newquestion';
import { FaTrash } from "react-icons/fa";
import { FaRegEdit} from "react-icons/fa";

function ViewAperçu1({id_sondage}){

 /* useEffect(() => {
    next1();
},[]);*/
const [active,Setactive] = useState(1);
const [update, setUpdate] = useState(0);
const { data,isLoading} = useQuery(["question"], () => {
  return axios.get(`http://127.0.0.1:4030/api/questions/questionsSondage/${id_sondage}`).then((response) => 
      response.data.question
);
});
if(isLoading){
  return <h3>Loading</h3>;
}

  return(
    <>


    
    <div>
    {
        Object.entries(data).map(([key,value]) => {
          if(value.typeQuestion == 'zoneTexte'){
          return <>
        <ZoneTexte value={value.intituleQuestion}/>
          
          </>
      }
      else if(value.typeQuestion == 'rate'){
        return <Rate1 value={value.intituleQuestion}/>
      }
      else if(value.typeQuestion == 'slider'){
        return <Slider1 value={value.intituleQuestion}/>
      }
      else if(value.typeQuestion == 'datepicker'){
        return <DatePicker1 value={value.intituleQuestion}/>
      }
      else{
        return <MultipleChoice value1={value.intituleQuestion} optionValue1={'e'} optionValue2={'t'}/>
      }
      })
      }
    </div>
    
    
   

    
    </>
  )
}

export {ViewAperçu1};