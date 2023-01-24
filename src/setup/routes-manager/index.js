import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
import { SignIn } from '../../pages/login/signIn';
import { SignUp } from '../../pages/login/signUp';
import { Accueil } from '../../pages/accueil';
import { Welcome } from '../../pages/welcome';
import Sondage from '../../pages/sondage/creerSondagee';
import { Mes_Sondages } from '../../pages/mesSondages';
import { SondagePublic } from '../../pages/sondagePublic';
import { Aperçu } from '../../pages/aperçu';
import { Send } from '../../pages/send';
import { Analyse } from '../../pages/analyse';
import { FormSondage } from '../../pages/FormSondage';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { Modeles } from '../../pages/modelesPersonnalisables';
import { TemplateView } from '../../pages/modelesPersonnalisables/templateView';
import { RepondreSondage } from '../../pages/repondreSondage';
import { AnswerSondage } from '../../pages/repondreSondage/index1';
import { AnalyseGraphique } from '../../components/analyse';

function Routage() {
  const client = new QueryClient();
    return( 
      <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Accueil/>}/>
          <Route path='/welcome/:id_user' element = {<Welcome/>}/>
          <Route path='/inscription' element = {<SignUp/>}/>
          <Route path='/connexion' element = {<SignIn/>}/>
          <Route path='/Creer_sondage/:id_user/:titre_sondage/:id_sondage' element = {<Sondage/>}/>
          <Route path='/Mes_Sondages/:id_user' element = {<Mes_Sondages/>}/>
          <Route path='/RépondreSondage' element = {<SondagePublic/>}/>
          <Route path='/Aperçu/:id_user/:titre_sondage/:id_sondage' element = {<Aperçu/>}/>
          <Route path='/Send/:id_user/:titre_sondage/:id_sondage' element = {<Send/>}/>
          <Route path='/Analyse/:id_user/:titre_sondage/:id_sondage' element = {<AnalyseGraphique/>}/>
          <Route path='/Creer_sondage/:id_user' element = {<FormSondage/>}/>
          <Route path='/modeles_perso/:id_user' element = {<Modeles/>}/>
          <Route path='/repondreSondage/:id_sondage' element = {<AnswerSondage/>}/>
          <Route path='/modeles_perso/view/:titre_template/:id_template/:id_user' element = {<TemplateView/>}/>

          
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
      
    );
}
export {Routage}