import React from 'react';
import { Slider } from '@material-ui/core/';

function valuetext(value) {
  return `${value} h`;
}

const today = new Date();
const date = today.getFullYear() + '-' + (today.getMonth()+1)+'-'+today.getDate();

function TimeForm() {
  return (
    <div className="time-form">
      <p className="current-time">Current Time - {date}</p>
      <p>Set Day</p>
      <Slider defaultValue={1} getAreaValueText={valuetext} aria-labelledby="discrete-slider" valueLabelDisplay="auto" step={1} marks min={1} max={5}></Slider>  
      <p>Set Hours</p>
      <Slider 
        defaultValue={3} getAreaValueText={valuetext} aria-labelledby="discrete-slider" valueLabelDisplay="auto"
        step={3} 
        marks min={0} max={21}>
      </Slider>
    </div>
  )
}

export default TimeForm;