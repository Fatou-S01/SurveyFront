import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import './CSS/login.css';
import {useQuery} from "@tanstack/react-query";

function SignIn() {
  const nav5 = useNavigate();
  
  const [mail, SetMail] = useState("");
  const [password, SetPassword] = useState("");

 /* const { data,isLoading} = useQuery(["user"], () => {
      return 
  });
  if(isLoading){
      return <h3>Loading</h3>;
  }*/

  const handleSubmit = (event) => {
      event.preventDefault()
      axios.post("http://localhost:4030/api/auth/signin",
      {
        email: mail,
        password: password
      }
      ).then((response) => {
        if(response.data.message == 'OK'){
          nav5(`/Welcome/${response.data.logUser._id}`);
      }
      }
          
    );
          
        
      /*const navbar = document.getElementsByClassName('Navbar');
      navbar[0].style.visibily='visible';
      nav5();*/
  }
  

  return (
    <>
      <div style = {{marginTop: '2rem'}}>
      <div> <h2 className='sign_in' ><i id='logo228' style= {{fontSize:'25px'}}>Faki</i><i id='logo118' style= {{fontSize:'25px'}}>Survey</i></h2></div>
      <div className='sign_in'>
      <div className='sign_in1' style = {{padding:'2.5rem'}}>
      <form onSubmit={handleSubmit} className='form1' style = {{padding:'2rem'}}>
          <h3 style = {{textAlign: 'center'}}>Connexion</h3>
          
          <label className='label4'>Adresse mail</label>
          <input required type='text'  value={mail} onChange={(e) => SetMail(e.target.value)} className='input_log'/>
          <label className='label4'>Mot de passe</label>
          <input required type='password'  value={password} onChange={(e) => SetPassword(e.target.value)} className='input_log'/>
      
          <input type='submit' value='Se connecter' id='login_button'/>

      </form>
      <div style = {{display: 'flex', flexDirection: 'row'}}>
          <p style={{marginTop:'0px'}}>Vous n'avez pas de compte ?</p>
          <Link style = {{color:'#2a9e9e'}} to = '/inscription'>Inscrivez-vous ici</Link>
      </div>
      </div>
      </div>
    </div>

    </>
    
    
  );
  
}

export{SignIn};