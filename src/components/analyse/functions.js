import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    LineController,
    BarController
  } from 'chart.js';
  import { Bar,Pie ,Line} from 'react-chartjs-2';
import {formatData} from './data'
  
 


  export function generateRandomColors(n){
    let randomColors = [];
    for (let i=0;i<n;i++){
      let maxVal = 0xFFFFFF;
      let randomNumber = Math.random() * maxVal; 
      randomNumber = Math.floor(randomNumber);
      randomNumber = randomNumber.toString(16);
      let randColor = randomNumber.padStart(6, 0);
      if(randomColors.includes(`#${randColor.toUpperCase()}`)){
        randomColors.push(`#${randomNumber.padStart(6, 0).toUpperCase()}`)
      }
      else{
        randomColors.push(`#${randColor.toUpperCase()}`)
      }
    }
    return randomColors
  }
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    LineController,
    BarController
  );
//functions for  charts
function manageDatasAndOptions(datasets){
  const options = {
    indexAxis: 'x',
    responsive:true,
    legend:
    {
        display: false
    }
    };
    
    const data = {
    labels:formatData(datasets).optionsReponses,
    datasets: [
      {
        data: formatData(datasets).nReponses,
        backgroundColor: generateRandomColors(formatData(datasets).optionsReponses.length),
        borderColor: '#A3A3A3',
        borderWidth: 1,
      },
    ],
    };
    return {options,data}
}


//functions for statistique
function moyenne(data){
    var sum = 0;
 
    data.forEach(function (item, idx) {
      sum += item;
    });
 
    // Returning the average of the numbers
    return sum / data.length;
}

function median (arr)  {
  const { length } = arr.length;
  
  arr.sort((a, b) => a - b);
  
  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }
  
  return arr[(length - 1) / 2];
};


function ecart_type(arr){
  let mean = arr.reduce((acc, curr)=>{
    return acc + curr
  }, 0) / arr.length;
  arr = arr.map((k)=>{
    return (k - mean) ** 2
  })
 let sum = arr.reduce((acc, curr)=> acc + curr, 0);
 let variance = sum / arr.length
 return Math.sqrt(sum / arr.length)
}


export{manageDatasAndOptions,moyenne,median,ecart_type}