import React, { useState, useEffect } from 'react';
import { Slider } from '@material-ui/core/';
import './TimeForm.css';

function getDate() {
  const today = new Date();
  var month = today.getMonth();
  if (today.getMonth() + 1 < 10) {
    month = "0" + (today.getMonth() + 1)
  }

  return today.getFullYear() + '-' + month +'-'+today.getDate()
}

function CardInput(props) {
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)

  useEffect(() => {
    props.setTotalHours((days * 24) + hours)
  });

  return (
    <div className="time-form">
      {(hours === 0 && days === 0) ? (
        <p className="current-time">Local Time - { getDate() }</p>) : 
        <p className="current-time">Forecast after {days}d {hours}h</p> }
      <p>Set Days</p>
      <Slider
        onChange={ (e, val) => setDays(val)}
        defaultValue={0} 
        aria-labelledby="discrete-slider" 
        valueLabelDisplay="auto" 
        step={1} 
        marks min={0} max={4}></Slider>  
      <p>Set Hours</p>
      <Slider 
        onChange={ (e, val) => setHours(val)}
        defaultValue={0} 
        aria-labelledby="discrete-slider" 
        valueLabelDisplay="auto"
        step={3} 
        marks min={0} max={21}>
      </Slider>
    </div>
  )
}

export default CardInput;