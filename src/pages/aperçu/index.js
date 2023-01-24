import {React,useEffect } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import { ProgressBar } from '../../components/progressBar';
import { Navbar } from '../../components/navbar';
import { ViewAperçu } from '../../components/ViewAperçu';


function Aperçu(){
  const params = useParams();
  const navigate = useNavigate();

  return(
    <>
       <Navbar step1={0}/>
    <ProgressBar bar_value='50%'/>
    <div style={{display: 'flex', justifyContent:'center', marginTop: '3.75%'}}>
      <ViewAperçu id_sondage={params.id_sondage} />
    </div>
      <div style={{display: 'flex', justifyContent:'space-between'}}>
    <button onClick={() => {navigate(`/Creer_sondage/${params.id_user}/${params.titre_sondage}/${params.id_sondage}`)}} style= {{color: '#2a9e9e', backgroundColor: '#fff', borderStyle: 'solid',borderColor:'#2a9e9e',borderRadius: '6px', height: '30px',width:'100px',marginLeft:'30px'}}>Previous</button>
    <button  onClick={() => {navigate(`/Send/${params.id_user}/${params.titre_sondage}/${params.id_sondage}`)}} style= {{color: '#fff', backgroundColor: '#2a9e9e', borderStyle: 'solid',borderRadius: '6px',borderColor:'#2a9e9e', height: '30px',width:'100px', marginRight:'30px'}}>Next</button>
    </div>
    </>
  )
}

export {Aperçu};