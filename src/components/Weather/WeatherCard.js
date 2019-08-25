import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './WeatherCard.css'

function convertTemperature(temp, unit) {
  if (unit=='metric') {
    return temp - 273.15
  }
  
  if (unit=='imperial') {
    return temp - 457.87
  }

}
function WeatherCard(props) {
  const [data, setData] = useState();
  const [icon, setIcon] = useState();
  
  useEffect(() => {
    fetchAPI()
  }, []);
  
  let t = 2
  const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + props.location.city + ',' + props.location.country + '&appid=' + process.env.REACT_APP_WEATHER_API_KEY
  const fetchAPI = async () => {
    const result = await axios(
      URL,
    );
    console.log(result.data)
    let API_response = result.data
    console.log(API_response.weather[0].description)
    setData(API_response.main.temp)
    setIcon(API_response.weather[0].icon)
  };

  return (
    <Card >
      <p>{props.location.city}, {props.location.country}</p>
      <p>temperature: {data}</p>
      <p>icon: {icon}</p>

      <p>{props.index} {props.isMetric ? 'Metric' : 'Imperial'}</p>
      <p>{props.index}</p>
      <p>convert {convertTemperature(data, 'Metric')}</p>
      <Button variant="outlined">Expand</Button>
    </Card>
  )
}

export default WeatherCard;
