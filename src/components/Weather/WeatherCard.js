import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './WeatherCard.css'


function WeatherCard(props) {
  const [data, setData] = useState();
  const [icon, setIcon] = useState();
  
  useEffect(() => {
    fetchAPI()
  }, []);
  
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
    setData(API_response.main.temp)
    setIcon(API_response.weather[0].icon)
    console.log("setIcon:", icon)
  };

  return (
    <Card className="WeatherCard">
      <p>{props.location.city}, {props.location.country}</p>
      <CardMedia>
        <p>icon: {icon}</p>
        <p><i class="wi wi-day-fog"></i><i class="wi wi-flood"></i><i class="wi wi-day-hail"></i></p> 
      </CardMedia>
      <CardContent>
        <p>index: {props.index}</p>
        <p>temp: {convertTemperature(data)} {props.isMetric ? 'C' : 'F'}</p>  
      </CardContent>
      <CardMedia> 
        <Button variant="outlined">Expand</Button>
      </CardMedia>
    </Card>
  )
}

export default WeatherCard;
