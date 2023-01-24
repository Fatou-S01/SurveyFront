import {React,useRef } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { FaRegEnvelope} from "react-icons/fa";
import { FaLink} from "react-icons/fa";
import { Mail } from '../../components/typeSend/mail';
import { Link1 } from '../../components/typeSend/link';
import emailjs from '@emailjs/browser';
import { Navbar } from '../../components/navbar';
import { ProgressBar } from '../../components/progressBar';
import people from '../../assets/people.png';

function Send(){

  /*send email*/
 /* const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_307najz', 'template_0f8mxkn', form.current, 'KPNMwvIvC07cFfpJi',{to_name: "Modou",
    message: "ghj",)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };*/
  const navigate4 = useNavigate();
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(0);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return(
    <>
    <Navbar step1={0}/>
    <ProgressBar bar_value='75%'/>
    <div style={{marginTop: '3.75%', textAlign: 'center',fontSize:'20px'}}>
      Comment souhaitez-vous recueillir les réponses ? 
    </div>
    <div style={{marginTop: '10px',display: 'flex', justifyContent: 'center'}}>
    <div  onClick={showModal} style={{borderWidth : '1px', borderStyle: 'solid', boxShadow: '2px 1px 22px 1px rgba(42,158,158,0.23)',borderColor: '#2a9e9e', width:'25%', display: 'flex', flexDirection:'column',borderRadius:'20px'}}>
    <img style={{width:'50%', paddingLeft:'25%', paddingRight:'25%', paddingTop: '10%'}} src={people}></img>
    <div style={{width: '70%', paddingLeft:'15%', paddingRight:'15%'}}>
    <h4 style={{color: '#2a9e9e', textAlign:'center'}}>Envoyez des sondages comme vous le souhaiter</h4>
    </div>
    <div style={{paddingLeft:'5%', paddingRight:'5%', marginTop:'20px', marginBottom: '10px'}}>
      <p style={{fontSize: '12px', textAlign:'center', color: 'gray'}}>Envoyez des sondages par email, partager un lien sur les réseaux sociaux,ou sur une page web, etc..</p>
    </div>
    </div>
    </div>

      <Modal
        open={open}
        title="Envoyer le formulaire"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
         
        ]}
      >

        <div style={{display: 'flex', flexDirection: 'row',borderBottomStyle: 'solid', borderBottomWidth:'1px', borderBottomColor: '#d9d9d9'}}>
          <h4>Envoyer via</h4>
          <div style={{marginTop:'20px', marginLeft:'120px', }}>
          <FaRegEnvelope style={{width: '25px',height: '25px',marginRight:'170px', color: send == 0 ? "#2a9e9e" : "#333"}} onClick= {() => {setSend(0)}}/>
          <FaLink style={{width: '20px',height: '20px', color: send == 1 ? "#2a9e9e" : "#333"}} onClick= {() => {setSend(1)}}/>
          </div>
        </div>
        {
          send == 0 ? <Mail link={`localhost:3000/repondreSondage/${params.id_sondage}`}/> : <Link1 link={`localhost:3000/repondreSondage/${params.id_sondage}`}/>
        }
      </Modal>
      <div style={{display: 'flex', justifyContent:'space-between'}}>
    <button onClick={() => {navigate4(`/Aperçu/${params.id_user}/${params.titre_sondage}/${params.id_sondage}`)}} style= {{marginLeft:'30px',color: '#2a9e9e', backgroundColor: '#fff', borderStyle: 'solid',borderColor:'#2a9e9e',borderRadius: '6px', height: '30px',width:'100px'}}>Previous</button>
    <button onClick={() => {navigate4(`/Analyse/${params.id_user}/${params.titre_sondage}/${params.id_sondage}`)}} style= {{marginRight:'30px',color: '#fff', backgroundColor: '#2a9e9e', borderStyle: 'solid',borderRadius: '6px',borderColor:'#2a9e9e', height: '30px',width:'100px'}}>Next</button>
    </div>
    </>
  )
}

export {Send};