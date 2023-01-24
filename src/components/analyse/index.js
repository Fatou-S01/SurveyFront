import {React, useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import "./analyse.css";
import {Graphique} from "./graphique";
import { TableauResultat } from './tableauResultats';
import { TableauStatistique } from './tableauStatistique';
import { Navbar } from '../navbar';
import { ProgressBar } from '../progressBar';
import { Grid } from '@mui/material';
import axios  from 'axios';
import {useQuery} from "@tanstack/react-query"
import {formatData} from './data'
import { AnalyseZoneTexte } from './analyseZoneTexte';


function AnalyseGraphique(){

    const navigate = useNavigate();
    const params = useParams()
    const { data,isLoading} = useQuery(["reponse"], () => {
        return axios.get(`http://127.0.0.1:4030/api/reponseQuestion/AnalyseSondageReponses/${params.id_sondage}`).then((response) => 
            response.data.reponseQuestion
      );
      });
      if(isLoading){
        return <h3>Loading</h3>;
      }

  
   /* const datas=[[
        {
            "id_question":1,
            "intitule_question": "Choisis ta couleur preferee parmi celles donnees?",
            "type_question":'checkbox',
           
        },
        [{"rose":5},{"vert":2},{"orange":0}]
    ],
        [{
            "id_question": 2,
            "intitule_question": "Quel est ton sexe?",
            "type_question":'checkbox',  
        },
        [{"femme":4},{"homme":7}]
    ]]*///A RETROUVER AVEC AXIOS EN UTILISANT L'ID DU SONDAGE  params.id_sondage
    
    return (
        <>
    <Navbar step1 = {0}/>
    <ProgressBar bar_value='100%'/>
    <div className='analyse'>
    {data.map( (question,index)=> 

        <Grid container key={question[0].intituleQuestion} className="mb-5 row" style={{marginBottom:'20px'}}>
        <Grid item xs={6} className='col' style={{paddingRight:'10px'}}>
        <h4 className='mb-3'>{index +1}-  {question[0].intituleQuestion}</h4>
        { question[0].typeQuestion=='zoneTexte'? <><div>Reponses  {`(${question[1].length})`}</div><AnalyseZoneTexte datasets= {question[1].join('. ')}/></> : <><div>Reponses  {`(${formatData(question).nReponsesTot})`}</div>
        <Graphique datasets={question}/></> }
        </Grid>
        {question[0].typeQuestion=='zoneTexte'?<></>: <Grid item xs={6} className='col my-auto' style={{marginTop:'25px'}}>
        <TableauResultat datasets = {question}/>
        <TableauStatistique datasets = {question}/>
        </Grid>}
    </Grid>

    )}
        
 
    </div>
    <div style={{display: 'flex', justifyContent:'space-between'}}>
    <button onClick={() => {navigate(`/Send/${params.id_user}/${params.titre_sondage}/${params.id_sondage}`)}} style= {{color: '#2a9e9e', marginLeft: '20px', backgroundColor: '#fff', borderStyle: 'solid',borderColor:'#2a9e9e',borderRadius: '6px', height: '30px',width:'100px'}}>Previous</button>
    </div>
    </>
    )

}

export {AnalyseGraphique};