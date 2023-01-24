import {React ,useRef, useState} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import axios from 'axios'


function Mail({link}){
  const navigate = useNavigate();
   /*send email*/
   const form = useRef();
   const [mail,SetMail] = useState('');
   const [message,SetMessage] = useState(link);
   const [objet,SetObjet] = useState('');

   const sendEmail = (e) => {
     e.preventDefault();
     axios.post("http://127.0.0.1:4030/api/email/plain-text-email",
     { 
         toemail: mail,
         objet: objet,
         message: message
         
     });


   };
  return(
    <>
    <div>
    <h4>Email</h4>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <div>
    <TextField id="standard-basic" label="A" variant="standard"style= {{width: '80%'}} onChange = {(event) => SetMail(event.target.value)}/>
    <TextField id="standard-basic" label="Objet" variant="standard" style= {{width: '80%'}}  onChange = {(event) => SetObjet(event.target.value)}/>
    <TextField id="standard-basic" value= {message} label="Message" variant="standard" style= {{width: '80%'}} onChange = {(event) => SetMessage(event.target.value)} />
    
    </div>
    <div style = {{marginBottom:'0px'}}>
    <input type="submit" onClick = {sendEmail} value="Send" style= {{backgroundColor: '#2a9e9e', color:'#fff',width:'100px',border:'none',height:'20px',borderRadius:'15px',float:'right', marginTop:'10px'}}/>
    </div>
    </div>
    
    </>
  )
}

export {Mail};