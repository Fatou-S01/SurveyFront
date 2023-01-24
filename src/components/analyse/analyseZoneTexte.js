import {React, useEffect, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import axios from "axios";
import content from '../../assets/content@2x.png'
import facher from '../../assets/fâcher@2x.png'
import neutre from '../../assets/neutre@2x.png'




  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    fontSizes: [30, 50]
  };
  const size = [1200, 400];
 


function AnalyseZoneTexte(props){
  const [words,changeWords] = useState({})
  const [nwords,changeNWords] = useState([])
  const [wordOrSentiment,changeWordOrSentiment] = useState(true)
  const [sentiments,changeSentiments] = useState({})
  const handleSubmit1 = () =>
{
  changeWordOrSentiment(true)
  axios.post('http://localhost:5000/worldCLoud', 
  { "reponses":props.datasets.join('. ')}
  ).then((res)=> {
      changeWords(res.data)
      changeNWords(Object.entries(res.data).map((e,index)=> {
        return {text:e[0],value:e[1]}
      }))
  });
  

}

const handleSubmit2 = () =>
{
  changeWordOrSentiment(false)
  axios.post('http://localhost:5000/sentimentAnalasys', 
  { "reponses":props.datasets.join('$')}
  ).then((res)=> {
    console.log(res.data)
     changeSentiments(res.data)
  });
  

}
 
  return (<div><div className='mb-2'>Veuillez choisir un des algorithmes suivants pour l'analyse de cette zone de texte</div>
    <button onClick={handleSubmit1} className="mx-5">WORLDCLOUD </button>
    <button onClick={handleSubmit2}> SENTIMENT ANALASYS </button>
     {wordOrSentiment?<ReactWordcloud
        options={options}
        size={size}
        words={nwords}
      />:<div className='row mt-5'>
        <div className='col' ><span className="sentiment mx-4">{sentiments['positive']}</span><img src={content} className="emoji"/></div>
      <div className='col'><span className="sentiment mx-4">{sentiments['negative']}</span><img src={facher} className="emoji"/></div>
      <div className='col'><span className="sentiment mx-4">{sentiments['neutral']}</span><img src={neutre}className="emoji"/></div>
      </div>}   
    </div>)
}

export {AnalyseZoneTexte}