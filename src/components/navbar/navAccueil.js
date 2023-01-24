import React from 'react';
import $ from 'jquery';
import "./navbar.css";
import { useLoaderData, useLocation, useNavigate,Link } from 'react-router-dom';



function NavbarAccueil(props){

  const nav = useNavigate();
  $(document).ready(function(){
    $('.link').click(function(){
      /*$(this).css({'color':'#2A9E9E','border-bottom':"solid","padding-bootom":"0rem"});*/
      $('.link').removeClass('focus1'); 
      $(this).addClass('focus1'); 
      });
    

    
  });
    return(
    <>
    
      <nav className="nav72">
        <a href="/" className="logo45">
          <h1 className="text" ><i id='logo_1' className='logo_2'>FaKi</i><i className='logo2'>Survey</i></h1>
        </a>

        <div className="nav__link1 hide">
          <a  className='link focus1'>Accueil</a>
          <a  className='link' to = '/inscription'>Créer sondage</a>
          <a className='link'>Répondre à un sondage</a>
         
        </div>
            <a href="/connexion" className="btn402" style = {{ marginLeft: '8%', borderStyle: 'solid', borderWidth:'1px', borderColor:'#2a9e9e', borderRadius: '30px'}}>Connexion</a>
            <a href="/inscription" className="btn402" style = {{ marginLeft: '1%', borderStyle: 'solid', borderWidth:'1px', borderColor:'#2a9e9e', borderRadius: '30px'}} >Inscription</a>
      </nav>

    </>
    );
}
export{NavbarAccueil};