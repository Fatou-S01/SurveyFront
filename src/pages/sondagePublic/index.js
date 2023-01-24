import React from 'react';
import './sondagePublic.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '@mui/material/Grid';
import { FaSignal,FaRegTrashAlt,FaEdit } from 'react-icons/fa';
import axios from 'axios';
import { Navbar } from '../../components/navbar';
import {useParams,useNavigate} from 'react-router-dom';
import {useQuery} from "@tanstack/react-query";


function Card_Sondage1(props){
   /* const delete_sondage = () =>{
        axios.delete('http://localhost:8000/api_sondage').then(res => {  
            console.log(res);  
            console.log(res.data);  
          }) 
    }*/
    const nav = useNavigate();
    
    return(
        <>

        <Grid container className='row445'>
            <Grid item xs={6}>
              <div style={{ marginLeft: '20px'}}>
            <p className='name123'>{props.title}</p>
            <p className='date123'>Créé le: {props.date} par {props.username}</p> 
            </div>
            </Grid>
            <Grid item xs={6} className='icone_all'>
             <button id='repondre' onClick={() => {nav(`/repondreSondage/${props.id_sondage}`)}}>Répondre</button>
            

            </Grid>

        </Grid>
      
        
        </>
    );
}

function SondagePublic(){
  const params = useParams();
    const { data,isLoading} = useQuery(["sondage"], () => {
        return axios.get("http://localhost:4030/api/sondages/statutSondage/public").then((response) => 
            response.data.sondage
      );
    });
    if(isLoading){
        return <h3>Loading</h3>;
    }
    /* take the user*/
   /* const {data: {userId}} = useQuery(["sondage"], () => {
        return axios.get("http://localhost:4030/api/users/statutSondage/public").then((response) => 
            response.data.sondage
      );
    });
    if(isLoading){
        return <h3>Loading</h3>;
    }
*/
    return(
        <>
        <Navbar step1={2}/>
        <h2 className='bord445'>SONDAGES PUBLICS</h2>
        <div className='Row_all123'>
        {
                Object.entries(data).map(([key,value]) => {
             
                        return <Card_Sondage1 date={value.created_at} title={value.titreSondage}  id_sondage = {value._id} username={''}/>
                    
                    
                })
        }
        
        </div>
        </>
    );
}

export{SondagePublic}