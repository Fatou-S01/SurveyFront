import React from 'react';
import './CSS/mesSondage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSignal,FaRegTrashAlt,FaEdit } from 'react-icons/fa';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import { Navbar } from '../../components/navbar';
import Grid from '@mui/material/Grid';
import {useQuery} from "@tanstack/react-query";
import { param } from 'jquery';
  



function Card_Sondage(props){
   /*const delete_sondage = (id_sondage) =>{
    axios.delete(`http://localhost:4030/api/sondages/removeSondage/${id_sondage}`).then(res => {  

}) 
    }*/
    const nav = useNavigate();
    
    return(
        <>
        <Grid container className='row445'>
          <Grid item xs={6} className = 'partie1'>
            <div className = 'partie1'>
            <p className='name123'>{props.title}</p>
            <p className='date123'>Créer le: {props.date}</p>
            </div>
            </Grid>
            <Grid item className='icone_all' xs={6}>
            <div className='each_icone' onClick={() => {nav(`/Analyse/${props.id_user}/${props.title}/${props.id_sondage}`)}}>
            <FaSignal className='icone1'/>
            <p className='p_ico'>Analyse</p>
            </div>
            <div className='each_icone' onClick={() => {nav(`/Creer_sondage/${props.id_user}/${props.title}/${props.id_sondage}`)}}>
            <FaEdit className='icone1'/>
            <p className='p_ico'>Modifier</p>
            </div>
            <div className='each_icone'>
            <FaRegTrashAlt className='icone1'/>
            <p className='p_ico'>Supprimer</p>
            </div>
            

            </Grid>

        </Grid>
    
        
        </>
    );
}

function Mes_Sondages(){
   const params = useParams();
    /*const { data,isLoading} = useQuery(["sondage"], () => {
        return axios.get("http://localhost:8000/api_sondage/").then((response) => 
            response.data
    );
    });
    if(isLoading){
        return <h3>Loading</h3>;
    }*/
    const { data,isLoading} = useQuery(["sondage"], () => {
        return axios.get(`http://localhost:4030/api/sondages/userSondage/${params.id_user}`).then((response) => 
            response.data.sondage
      );
    });
    if(isLoading){
        return <h3>Loading</h3>;
    }
    return(
        <>
        <Navbar step1={1}/>
        <h1 className='bord445'>Tableau de bord</h1>
        
        <div className='Row_all123'>
        {
            data.length == 0 ? <>Vous n'avez pas encore créé de sondage</> : <></>
        }
            {
                Object.entries(data).map(([key,value]) => {
                    return <Card_Sondage date={value.created_at} title={value.titreSondage} id_user = {params.id_user} id_sondage = {value._id}/>
                })
            }
        
         
          
 
        </div>
        </>
    );
}

export{Mes_Sondages}