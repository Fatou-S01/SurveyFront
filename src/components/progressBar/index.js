import React from 'react';
import "./progressBar.css";



function ProgressBar({bar_value}) {
  return(
    <>
        <div>
        <div className = 'container901'>
            <div id='progress-container' style={{width: bar_value,display: 'flex',flexDirection: 'row'}}></div>
            <div className='dfg'>
               <p className='partie221'>Création du sondage</p>
               <p className='partie221'>Aperçue</p>
               <p className='partie221'>Envoi du sondage
               </p>
               <p className='partie221'>Analyse des résultats</p></div>
               
        </div>
        </div>

       
        
        

        
    </>
    );
}
export {ProgressBar}