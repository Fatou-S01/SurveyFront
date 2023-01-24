import {React, useState } from 'react';

function formatDataForStatistique(data){
    let datasets = []
    let optionsReponsesInNumber =  Array.from({ length: formatData(data).optionsReponses.length }, (value, index) => index+1);
    const minimum = formatData(data).nReponses.indexOf(Math.min(...formatData(data).nReponses))+1
    const maximum = formatData(data).nReponses.indexOf(Math.max(...formatData(data).nReponses))+1
    optionsReponsesInNumber.map((e,index)=> {
        datasets = datasets.concat(Array.from({ length: formatData(data).nReponses[index]}, (value, index) => index).map((element2)=> {return e}))
    })
    return {datasets,minimum,maximum}
}

function formatData(data){
    const nReponses = []
    const optionsReponses = []
    let nReponsesTot = 0;
    for (let option of data[1]){
        optionsReponses.push(Object.keys(option)[0])
        nReponses.push(Object.values(option)[0])
        nReponsesTot = nReponsesTot+Object.values(option)[0]
    }
    return  {optionsReponses,nReponses,nReponsesTot}
    }

export {formatData,formatDataForStatistique}



