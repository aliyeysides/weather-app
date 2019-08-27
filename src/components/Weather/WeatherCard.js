import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './WeatherCard.css'


function WeatherCard(props) {
  const [temperature, setTemperature] = useState();
  const [icon, setIcon] = useState();
  
  useEffect(() => {
    fetchAPI()
  }, []);
  
  function convertIcon(icon) {
    if (icon === '01n') {
      return <i class="wi wi-day-sunny"></i>
    }
    else if (icon === '02n') {
      return 'wi-day-cloudy';
    } 

    if (icon === '01d') {
      return 'wi-day-sunny';
    }
    else if (icon === '02d') {
      return 'wi-day-cloudy';
    } 
  }
  function convertTemperature(temp) {
    if (props.isMetric) {
      return Math.round(temp - 273.15)
    }
    if (!props.isMetric) {
      return Math.round((temp - 273.15) * 9/5 + 32)
    }
  }

  const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + props.location.city + ',' + props.location.country + '&appid=' + process.env.REACT_APP_WEATHER_API_KEY
  const fetchAPI = async () => {
    const result = await axios(
      URL,
    );
    console.log(result.data)
    let API_response = result.data
    setTemperature(API_response.main.temp)
    setIcon(API_response.weather[0].icon)
    console.log("setIcon:", icon)
  };

  return (
    <Card className="WeatherCard">
      <p>{props.location.city}, {props.location.country}</p>
      <CardMedia>
        <p>icon: {convertIcon(icon)}</p>
      </CardMedia>
      <CardContent>
        <p>index: {props.index}</p>
        <p><i class="wi wi-thermometer"></i> : {convertTemperature(temperature)} {props.isMetric ? 'C' : 'F'}</p>  
      </CardContent>
      <CardMedia> 
        <Button variant="outlined">Expand</Button>
      </CardMedia>
    </Card>
  )
}

export default WeatherCard;
