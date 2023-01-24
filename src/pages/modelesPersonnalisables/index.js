import React from 'react';
import Grid from '@mui/material/Grid';
import Card from 'react-bootstrap/Card';
import employee from '../../assets/employee.png';
import './CSS/modeles.css';
import {useNavigate,useParams} from 'react-router-dom';
import { Navbar } from '../../components/navbar';
import { Row } from 'antd';
import axios  from 'axios';
import {useQuery} from "@tanstack/react-query";



function CardSondage({title,description,id_template,id_user}) {
  const navigate2 = useNavigate();
    return(
      <>
        <Card onClick = {() => {navigate2(`/modeles_perso/view/${title}/${id_template}/${id_user}`)}}style={{ width: '16rem', marginRight:'2rem', marginBottom:'1rem',borderRadius:'20px', borderStyle: 'none'}} className='card1'>
      <Card.Img style={{ width: '16rem'}} variant="top" src={employee}/>
      <Card.Body>
          <Card.Title style = {{fontWeight: 'bold'}}>{title}</Card.Title>
          <Card.Text>
            {description}
   
          </Card.Text>
      </Card.Body>
    </Card>
      </>
    )
}


function Modeles(){

    const params = useParams();
  
   
    const { data,isLoading} = useQuery(["modele"], () => {
        return axios.get("http://127.0.0.1:4030/api/modelePersonnalisable/getAllModelePersonnalisable").then((response) => 
            response.data
      );
    });
    if(isLoading){
        return <h3>Loading</h3>;
    }


   
    return(
    <>
    <Navbar step1={0}/>
    <Grid container>
        
        <Grid xs={3} id='theme'>
            <div id='theme1'>
                <a href='#' className='theme2' id='theme2_plus'>Thémes</a>
                <a href='#' className='theme2'>Education</a>
                <a href='#' className='theme2'>Environnement</a>
                <a href='#'className='theme2'>Santé</a>
                <a href='#'className='theme2'>Culture</a>
                <a href='#'className='theme2'>Sport</a>
                <a href='#'className='theme2'>Agriculture</a>
                <a href='#'className='theme2'>Commerce</a>

            </div>
        </Grid>
        <Grid xs={9} id='template'>
            <div className='Card444'>
            <Row>
            { Object.entries(data.modelePersonnalisables).map(([index,value]) => {
            return <CardSondage key = {index} title={value.titreTemplate} description={value.description} id_template={value._id} id_user = {params.id_user} />
        
        })}
            
            </Row>

            </div>
        </Grid>
    </Grid>
        
    </>
    );
}
export {Modeles};