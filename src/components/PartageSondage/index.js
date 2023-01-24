import {React, useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import "./PartageSondage.css";
import { ModalForPartage } from './ModalForPartage';
import { Button, Modal } from 'antd';

function PartageSondage(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mails, setMails] = useState("");
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

     return (
    <>
      <Button className='buttonPartager' onClick={showModal}>
        Partager
      </Button>
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
            <input type="text" id="coediteurs" value={mails} onChange={(e) => setMails(e.target.value)} placeholder="sfaki@gmail.com"/>
            </form></p>
      </Modal>
    </>
  );
    
}

export {PartageSondage}