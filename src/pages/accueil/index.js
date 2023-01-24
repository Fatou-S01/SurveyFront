import {React } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import { NavbarAccueil } from '../../components/navbar/navAccueil';
import Carousel from 'react-bootstrap/Carousel';
import { Container, width } from '@mui/system';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import outils from '../../assets/outils.png';
import objectifs from '../../assets/objectifs.webp';
import questions from '../../assets/questions.webp';
import hero from '../../assets/hero-img.png';
import questionnaire from '../../assets/Questionnaire-en-ligne.jpg';
import skills from '../../assets/skills.png';
import './accueil.css';
import { Grid } from '@mui/material';


function Accueil(){
  const navigate = useNavigate();
  return(
    <>
   
      <NavbarAccueil/>
     
      <section id="hero" className="d-flex align-items-center">
          <div className='container45 ' style={{backgroundColor: '#fff'}}>
              <Grid container style= {{backgroundColor: '#fff'}}>
                  <Grid item xs = {6}>
                      <h1 className="logo45">Bienvenue dans<h2><i className="logo_1">Faki</i><i className="text-dark logo_2">Survey</i></h2></h1>
                      <h3 className="text-dark pb-3 animated zoomIn">Votre plateforme de création de sondage préférée</h3>
                      <div className="d-flex justify-content-center justify-content-lg-start">
                          <a href="/inscription" className="btn-get-started scrollto creer">Créer sondage</a>
                      </div>
                  </Grid>

                  <Grid item xs = {6} className="hero-img">
                   
                        <img src={outils} style={{width: '600px',marginTop: '20px'}} className="imsg-fluid animated" alt="1"/>
                    
              
                  </Grid>
              </Grid>
          </div>
      </section>
      <section id="clients" className="clients section-bg">
              <center>
                  <div className="container">
                      <h2>Mes clients sont-ils satisfaits?</h2>
                  </div>
              </center>
      </section>
      <section id="skills" className="skills">
              <Container>
                  <Grid container className='mt-5' style={{height: '400px',backgroundColor: '#fff'}}>
                      <Grid item xs = {6}className="d-flex align-items-center">
                          <img src={hero} className="img-fluid" alt=""/>
                      </Grid>
                      <Grid className="pt-4 pt-lg-0 content" item xs = {6}>
                          <h3 style={{ marginTop: '100px' }}>Créer à partir de zéro</h3>
                          <p className="fst-italic">
                              A partir de zéro, créez votre propre sondage, en ajoutant vos propres questions et leurs propres types de réponse.
                          </p>
                          <div className="d-flex justify-content-center justify-content-lg-start">
                              <a href="#" className="sond">Créer sondage</a>
                          </div>
                      </Grid>
                  </Grid>
              </Container>
    </section>
    <section>
              <Container>

                  <Grid container style={{height: '400px', backgroundColor: '#fff'}}>

                      <Grid item xs = {6} className="content d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                              <h3>Créer à partir de modèles personnalisables</h3>
                              <p>
                                  Vous voulez y allez vite? Eh bien des modèles personnalisables sont déjà à votre disposition. Choisissez juste un et personnalisez le pour créer votre propre sondage.
                              </p>
                              <div className="d-flex justify-content-center justify-content-lg-start">
                                  <a href="#" className="sond">Créer sondage</a>
                              </div>
                      </Grid>
                      <Grid item xs = {6}d v className="align-items-stretch order-1 order-lg-2 quest" >
                        <img src={questionnaire} style={{width: '600px'}} alt='ques'/>
                      </Grid>
                  </Grid>
              </Container>

    </section>
    <Container>

              <Grid container className="mt-5" style={{height: '400px', backgroundColor: '#fff'}}>
                  <Grid item xs = {6} className="d-flex align-items-center">
                      <img src={skills} className="img-fluid" alt=""/>
                  </Grid>
                  <Grid item xs = {6} className="pt-4 pt-lg-0 content">
                      <h3 style={{marginTop: '100px'}}>Importez vos questions</h3>
                      <p className="fst-italic">
                          A partir de zéro, créez votre propre sondage, en ajoutant vos propres questions et leurs propres types de réponse.
                      </p>
                      <div className="d-flex justify-content-center justify-content-lg-start">
                          <a href="#" className="sond">Créer sondage</a>
                      </div>
                  </Grid>
              </Grid>

    </Container>
    <section id="cta" className="cta">
              <Container className="container" data-aos="zoom-in">

                  <Grid container>
                      <Grid item xs = {6} className="text-center text-lg-start">
                          <h3>Répondre à un sondage</h3>
                          <p> Donnez vos avis sur des sondages publics afin de contribuer à l’aide à la prise de décision.</p>
                      </Grid>
                      <Grid item xs = {6} className="cta-btn-container text-center">
                          <a className="cta-btn align-middle lig" href="#">Répondre sondage</a>
                      </Grid>
                  </Grid>

              </Container>
    </section>
   
    </>
  )
}

export {Accueil};