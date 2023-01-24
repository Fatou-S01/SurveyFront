import {React } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import { Navbar } from '../../components/navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './welcome.css'
import outils from '../../assets/outils.png';
import { Container } from 'react-bootstrap';
import { Grid } from '@mui/material';

function Welcome(){
  const navigate = useNavigate();
  const params = useParams();
  return(
    <>
    <Navbar step1={0}/>

    <section id="hero" className="align-items-center">

      <Container>
        <Grid container>
          <Grid item xs={6} className="justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" style={{marginTop:'10px'}}>
            <h1 className="text-dark">Avec<h2><i className="vert">Faki</i><i className="text-dark">Survey</i></h2></h1>
            <h3 className="text-dark pb-3 animated zoomIn">Créer des sondages devient plus facile</h3>
          </Grid>

          <Grid  item xs={6} className="order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src={outils} style={{width: '600px'}} className="imsg-fluid animated" alt=""/>
          </Grid>
      
        </Grid>
      </Container>
    </section>
    <section  style = {{paddingBottom:'0px'}}>
      <center>
        <div className="container votre" style = {{marginTop:'40px', marginBottom:'40px'}}>
          <h3>Comment voulez-vous créer votre sondage?</h3>
        </div> 
      </center>
    </section>

    <Grid container style = {{marginTop: '0'}}>
      <Grid  item xs={4} className="bord">
        <center>
        <h5>
          A partir de zéro
        </h5>
        <button className="btn1" onClick={() => navigate(`/Creer_sondage/${params.id_user}`)}>Cliquez ici</button>
        </center>
        
      </Grid>
      <Grid  item xs={4} className="bord">
        <center>
          <h5>
            Modèles personnalisables
          </h5>
          <button className="btn1 " onClick={() => navigate(`/modeles_perso/${params.id_user}`)}>Cliquez ici</button>
        </center>
      </Grid>
      <Grid  item xs={4}>
      <center>
        <h5>
          Importez des questions
        </h5>
        <button className="btn1 " onClick={() => navigate(`/modeles_perso/${params.id_user}`)}>Cliquez ici</button>
      </center>
      </Grid>
    </Grid>
    </>
  )
}

export {Welcome};