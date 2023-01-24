import {React } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import { Navbar } from '../../components/navbar';
import { ProgressBar } from '../../components/progressBar';

function Analyse(){
  const navigate = useNavigate();
  const params = useParams();
  return(
    <>
      <Navbar/>
    <ProgressBar bar_value='100%'/>
    <div style={{marginTop: '3.75%'}}>
     Analyse des résultats
    </div>
    <div style={{display: 'flex', justifyContent:'space-between'}}>
    <button onClick={() => {navigate(`/Send/${params.id_user}/${params.titre_sondage}/${params.id_sondage}`)}} style= {{color: '#2a9e9e', marginLeft: '20px', backgroundColor: '#fff', borderStyle: 'solid',borderColor:'#2a9e9e',borderRadius: '6px', height: '30px',width:'100px'}}>Previous</button>
    </div>
    
    </>
  )
}

export {Analyse};