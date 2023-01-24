import React from 'react';
import '../question/question.css';
import { DatePicker, Space } from 'antd';
import './CSS/typeQuestion.css'

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function DatePicker1({value,style}){
  return(
    
    <>
    <div style ={style}>
    <p >{value}</p>
      <Space direction="vertical">
    <DatePicker onChange={onChange} sx = {{marginTop:'10px'}}/>
  </Space>
  </div>

    </>
  )
}
export {DatePicker1}