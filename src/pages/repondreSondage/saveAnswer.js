import {React,useEffect,useState } from 'react';
import axios from 'axios';
import {useQuery} from "@tanstack/react-query";

const SaveAnswer = (id_sondage) => {
  
  const paragraphe = document.getElementsByClassName('paragraphe');
  


    axios.get(`http://127.0.0.1:4030/api/questions/questionsSondage/${id_sondage}`).then((response) => {
        
        for(let i = 0; i < paragraphe.length; i++){
          const question = (response.data.question).find( question_value => question_value.intituleQuestion == paragraphe[i].children[0].innerText);
          if(question.typeQuestion == 'zoneTexte'){
            axios.post("http://localhost:4030/api/reponseQuestion/createReponseQuestion",
              { 
                intituleReponse: (paragraphe[i].children[1].value != '') ? paragraphe[i].children[1].value : "",
                questionId: question._id,
          
              }
              );

          }
          if(question.typeQuestion == 'slider'){
            axios.post("http://localhost:4030/api/reponseQuestion/createReponseQuestion",
              { 
                intituleReponse: paragraphe[i].children[1].value,
                questionId: question._id,
          
              }
              );

          }
        }
    }
        
  );


}
export {SaveAnswer}