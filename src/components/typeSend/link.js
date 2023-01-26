import {React,useState} from 'react';
import TextField from '@mui/material/TextField';
import {useNavigate,useParams} from 'react-router-dom';
import {useClipboard} from 'use-clipboard-copy'

function Link1({link}){
  const {copy} = useClipboard();
 
  const[copied,setCopied] = useState(false);

  const navigate = useNavigate();
  return(
    <>
    <div>
    <h4>Lien</h4>
    </div>
    <TextField id="standard-basic" variant="standard"style= {{width: '80%'}} defaultValue = {link} />
    <div style = {{marginBottom:'20px'}}>
    <input type="submit" onClick={()=> {
      copy(link);
      setCopied(true);
    }} value={copied == true ? "Lien copié" : "Copier"} style= {{backgroundColor: '#2a9e9e', color:'#fff',width:'100px',border:'none',height:'20px',borderRadius:'15px',float:'right', marginTop:'10px'}}/>
    </div>
    </>
  )
}

export {Link1};