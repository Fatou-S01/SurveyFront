import {React,useState } from 'react';
import { Checkbox } from 'antd';

import { Button, Modal } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Result } from 'antd';
import './formSondage.css';
import survey1 from '../../assets/survey1.png';
import axios  from 'axios';
import {useNavigate,useParams} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


function FormSondage(){
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
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
  /*checkbox*/

  const [sondage,setSondage] = useState('');
  const [statut, setStatut] = useState('private');
  const [description, SetDescription] = useState("");
  const [titre_sondage, SetTitreSondage] = useState("");
  /*save Sondage*/
  const saveSondage = () => {
    axios.post("http://localhost:4030/api/sondages/createSondage",
      { 
          userId: params.id_user,
          titreSondage: titre_sondage,
          description: description,
          statutSondage: statut,
      }).then((response) => {
        setSondage(response.data);
        showModal();

      });
  }
  return(
    <>

      
   <Grid container style={{height:'300px'}} >
       
        <Grid item  xs={6}>
            <div id='image_template' >
            <img src = {survey1} id = 'image_tem'></img>
            </div>
        </Grid>
        <Grid item xs={6}  style={{ height:'90%'}}>
        <div style={{marginTop: '15%'}}> <h1 className='sign_in' ><i id='logo2' style= {{fontSize:'30px'}}>Faki</i><i id='logo1' style= {{fontSize:'30px'}}>Survey</i></h1></div>
          <div style={{marginTop: '10%', marginLeft:'10%'}}>
            
        <div style={{display: 'flex', flexDirection:'column'}}>
        <TextField value={titre_sondage} onChange={(e) => SetTitreSondage(e.target.value)} id="standard-basic" label="Nom de votre sondage" variant="standard" style={{width: '80%'}}/>
        <TextField value={description} onChange={(e) => SetDescription(e.target.value)} id="standard-basic" label="Description" variant="standard" style={{width: '80%'}}/>
        </div>
        <div style={{marginTop:'30px'}}>
        <Checkbox onChange={(e)=>{(e.target.checked === true) ? setStatut('public'):<></>}}>Public</Checkbox>
        <Checkbox onChange={(e)=>{(e.target.checked === true) ? setStatut('private'):<></>}}>Privé</Checkbox>
        </div>
       <div style={{float:'right',marginTop:'80px', height:'40px', marginRight:'30px'}}>
        <button onClick={saveSondage} style={{ height:'30px',width: '10rem', fontWeight:'bold', backgroundColor:'#2a9e9e', color: "#fff", border: 'none', borderRadius:'15px'}}>Créer mon Sondage</button>
        </div>
        </div>
        </Grid>
    </Grid>

  

      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[

        ]}
      >
        <Result
    icon={<SmileOutlined style={{color: '#2a9e9e'}}/>}
    title="Great, Votre sondage a été créé!"
    extra={<Button style={{backgroundColor: '#2a9e9e', color:'#fff'}} onClick={()=>{navigate(`/Creer_sondage/${params.id_user}/${titre_sondage}/${sondage.createdSondage._id}`)}}>Next</Button>}
  />
      </Modal>

    
    </>
  )
}

export {FormSondage};