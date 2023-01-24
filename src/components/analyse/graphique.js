import {React, useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import "./analyse.css";
import {manageDatasAndOptions} from "./functions"
import { Bar,Pie ,Line} from 'react-chartjs-2';
import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';


function ButtonForChangesGraphType(props){
  return(<div>
<button  onClick = {()=> props.changeGraphType('Pie')}><PieChartIcon/></button ><button  onClick = {()=> props.changeGraphType('Line')}><ShowChartIcon/></button><button  onClick = {()=> props.changeGraphType('Bar')}><BarChartIcon/></button>
    </div>)
}

function Graphique(props){


const [graphType,changeGraphType] = useState("Bar")
const {options,data} = manageDatasAndOptions(props.datasets)
if (graphType == 'Bar') {
  return (
    <div className='graph'>
       <ButtonForChangesGraphType changeGraphType = {changeGraphType}/> 
      <Bar options={options} data={data} />
    </div>

 )
}
else if (graphType == 'Pie') {
  return (
    <div className='graph1'>
       <ButtonForChangesGraphType changeGraphType = {changeGraphType}/> 
      <Pie data={data} options={options}/>

    </div>
    )
}

else if (graphType == 'Line') {
  return (
    <div className='graph'>
       <ButtonForChangesGraphType changeGraphType = {changeGraphType}/> 
      <Line options={options} data={data} />

    </div>
    )
}


}

export {Graphique};