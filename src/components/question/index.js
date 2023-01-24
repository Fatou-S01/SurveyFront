import {React,useState} from "react";
import "./question.css";
import { NewQuestion } from "../typeQuestion/newquestion";
import { Banque } from "../banqueDonnees";
import Grid from '@mui/material/Grid';
import { ProgressBar } from "../progressBar";
import { useNavigate,useParams } from "react-router";
import { ViewAperçu } from "../ViewAperçu";
import { ViewAperçu1 } from "../ViewAperçu/index1";
import edit from '../../assets/edit.png';
import { Button, Modal } from 'antd';



var numberQ = 0;
function Question(){
  const nav4 = useNavigate();
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mails, setMails] = useState("");
  
  const [question_item, Setquestion_item] = useState([]);


  const Add = () => {
    const test = numberQ + 1;
    Setquestion_item([...question_item,test]);
  }

  const showModal = () => {
      setIsModalOpen(true);
      setMails("")
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      //ON DOIT FAIRE LE TRAITEMENT BACKEND ICI ET ENVOYER LE LIEN DU SONDAGE AUX COEDITEURS
      alert(mails);
      setIsModalOpen(false);
    }

  const handleCancel = () => {
      setIsModalOpen(false);
    };

  return(
    <>
     <ProgressBar bar_value='25%'/>

    <Grid container spacing={1} sx={{ borderTopStyle: 'solid', borderTopWidth: '1px', borderTopColor: '#d9d9d9', marginTop:'3.75%'}}>
  <Grid item xs={3} sx={{ borderRightStyle: 'solid', borderRightWidth: '1px', borderRightColor: '#d9d9d9'}}>
    <Banque/>
  </Grid>
  <Grid item xs={9} sx={{ borderLeftStyle: 'solid', borderLeftWidth: '1px', borderLeftColor: '#d9d9d9'}}>

      <div id='top_start' style={{display:'flex', justifyContent:'space-between'}}>
        <h5 id='titre_sondage404'>{params.titre_sondage}</h5>
        <img src={edit} width={'50px'} height={'50px'} style={{marginRight:'20px'}} onClick={showModal}></img>
        <Modal
        open={isModalOpen}
        title="Ajoutez des editeurs pour ce sondage"
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Annuler
          </Button>,
          <Button key="submit" className='buttonPartager'  onClick={handleSubmit}>
            Ajouter 
          </Button>,
        ]} >
        <p><form>
            <p><label>Veuillez entrer les mails des personnes que vous voulez ajouter comme coediteurs </label></p>
            <input type="text" id="coediteurs" className="question" value={mails} onChange={(e) => setMails(e.target.value)} placeholder="sfaki@gmail.com"/>
            </form></p>
      </Modal>
      </div>
      <div id='container542'>
            <div className='remove'>
                
            </div>
            <ViewAperçu id_sondage={params.id_sondage}/>
            <NewQuestion/>
            {question_item.map((index) =>  <NewQuestion key = {index}/>)} 
           
            

            </div>
            <div id='ajout'>
                <button className='nouvelle_q' onClick={Add}>+ Nouvelle question</button>
            </div>
            <div id='end'>
            <button id='enregistrer' onClick={() => {nav4(`/Aperçu/${params.id_user}/${params.titre_sondage}/${params.id_sondage}`)}}>Enregistrer le sondage</button>
            </div>

   
            </Grid>
            </Grid>
            

    </>
  )
}
export {Question}