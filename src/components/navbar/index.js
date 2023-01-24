import React from 'react';
import $ from 'jquery';
import "./navbar.css";
import { Question } from '../question';
import { Mes_Sondages } from '../../pages/mesSondages';
import { useLoaderData, useLocation, useNavigate,Link,useParams } from 'react-router-dom';



function Navbar({step1}){
  const nav = useNavigate();
  const params = useParams();
 /* $(document).ready(function(){
    $('.link').click(function(){
      /*$(this).css({'color':'#2A9E9E','border-bottom':"solid","padding-bootom":"0rem"});*/
     /* $('.link').removeClass('focus1'); 
      $(this).addClass('focus1'); 
      });
    

    
  });*/
  const [step, setStep] = React.useState(step1);
    return(
    <>
    
      <div className="nav72">
        <a href="/" className="logo45">
          <h1 className="text" ><i id='logo_1' className='logo_2'>FaKi</i><i className='logo2'>Survey</i></h1>
        </a>

        <div className="nav__link1 hide">
          <a className={step == 0 ? 'link focus1' : 'link '} onClick={()=> {nav(`/welcome/${params.id_user}`)}}>Créer Sondage</a>
          <a  className={step == 1 ? 'link focus1' : 'link '}onClick={()=> {nav(`/Mes_Sondages/${params.id_user}`)}} >Mes Sondages</a>
          <a className={step == 2 ? 'link focus1' : 'link '} onClick={()=> {nav('/RépondreSondage')}}>Répondre à un sondage</a>
         
        </div>
            <a href="" class="btn402" style = {{marginLeft: '20%'}}>Déconnexion</a>
      </div>
      {
        /*step == 0 ? <Question/> : step == 1 ? <Mes_Sondages/> : <></>*/
      }

    </>
    );
}
export{Navbar};