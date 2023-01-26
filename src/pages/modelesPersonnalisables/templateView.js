import {React,useEffect,useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import './CSS/modeles.css';
import survey1 from '../../assets/survey1.png';
import axios  from 'axios';
import Grid from '@mui/material/Grid';
import {useQuery} from "@tanstack/react-query";


function TemplateView(){
  
  const navigate1 = useNavigate();
  const params = useParams();
  const [modele, setModele] = useState("");
  const [sondageModele,setSondageModele]=useState("");

  useEffect(() => {
    axios.get(`http://127.0.0.1:4030/api/modelePersonnalisable/${params.id_template}`).then((response) => {
      setSondageModele(response.data.modelePersonnalisable)
    }
    
);
  },[])

  const { data,isLoading} = useQuery(["modele"], () => {
    return axios.get(`http://127.0.0.1:4030/api/questionPredefinie/questionPredefiniesModelePerso/${params.id_template}`).then((response) => 
       (response.data).questionPredefinie
  );
});
if(isLoading){
    return <h3>Loading</h3>;
}


const saveSondage = () => {
  axios.post("http://127.0.0.1:4030/api/sondages/createSondage",
    { 
        userId: params.id_user,
        titreSondage: params.titre_template,
        description: sondageModele.description,
        statutSondage: 'private',
    }).then((response) => {
      const test = response.data
      for(let i = 0; i < data.length; i++){
        if(data[i].typeQuestion == 'zoneTexte' || data[i].typeQuestion == 'rate' || data[i].typeQuestion == 'slider' || data[i].typeQuestion == 'datepicker'){
          axios.post("http://127.0.0.1:4030/api/questions/createQuestion",
          { 
              sondageId: test.createdSondage._id,
              intituleQuestion: (data[i].typeQuestion == "zoneTexte" ? data[i].intituleQuestion : data[i].typeQuestion == 'rate' ?  data[i].intituleQuestion : data[i].typeQuestion == 'slider' ? 
              data[i].intituleQuestion : data[i].typeQuestion == 'datepicker' ? data[i].intituleQuestion : ""
              ),
              typeQuestion: data[i].typeQuestion,
              obligatoire: data[i].obligatoire,
          }).then((response) => {});
      }
      else if(data[i].typeQuestion == 'multipleChoice'){
        axios.post("http://127.0.0.1:4030/api/questions/createQuestion",
          { 
              sondageId: test.createdSondage._id,
              intituleQuestion: data[i].intituleQuestion,
              typeQuestion: 'Multiple Choice',
              obligatoire: data[i].obligatoire,
          }).then((response) => {
            for(let j = 0; j < data[i].optionReponse.length; j++){
              axios.post("http://127.0.0.1:4030/api/optionReponse/createOptionReponse",
              { 
                  questionId: (response.data).createdQuestion._id,
                  intituleOption: data[i].optionReponse[j], //optionReponse attribut de question predefinies
                  index: i + 1
              })
            }
    
          });
      }
      else{
        axios.post("http://127.0.0.1:4030/api/questions/createQuestion",
          { 
              sondageId: test.createdSondage._id,
              intituleQuestion:  data[i].intituleQuestion,
              typeQuestion: 'Checkbox',
              obligatoire: data[i].obligatoire,
          }).then((response) => {
            for(let j = 0; j <  data[i].optionReponse.length; j++){
              axios.post("http://127.0.0.1:4030/api/optionReponse/createOptionReponse",
              { 
                  questionId: (response.data).createdQuestion._id,
                  intituleOption: data[i].optionReponse[j],
                  index: i + 1
              })
            }
    
          });
      }
      }
      navigate1(`/Creer_sondage/${params.id_user}/${params.titre_template}/${test.createdSondage._id}`)

    });
    
   /* navigate1(`/Creer_sondage/${params.id_user}/${params.titre_template}/${modele.statutSondage}`);*/
}

  return(
    <>

      
   <Grid container style={{height:'300px'}} >
       
        <Grid item  xs={6}>
        <div id='text_template'>
        <h1 id='titre_template'>{params.titre_template}</h1>
        <div id='text_card'>{sondageModele.description}</div>
        </div>
        <div id='bouton_green'>
        <button className='bouton_green_use' onClick={saveSondage}>Use this template</button>
        <button className='bouton_green_prev' onClick={() => {navigate1(`/modeles_perso/preview/${params.titre_template}/1/${params.id_template}/${params.id_user}`)}}>Preview template</button>
       
        </div>
    
        </Grid>
        <Grid item xs={6}  style={{ height:'100%'}}>
        <div id='image_template' >
            <img src = {survey1} id = 'image_tem'></img>
            </div>
        </Grid>
    </Grid>

  

      

    
    </>
  )
}

export {TemplateView};