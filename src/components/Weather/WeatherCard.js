import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './WeatherCard.css'

function WeatherCard(props) {
  const [data, setData] = useState(true);

  useEffect(() => {
    fetchAPI()
  }, []);

  const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + props.location.city + ',' + props.location.country + '&appid=' + process.env.REACT_APP_WEATHER_API_KEY
  const fetchData = async () => {
    const result = await axios(
      URL,
    );
    console.log(result.data)
    // setData(result.data)
    // console.log(data)
  };
  
  function fetchAPI() {
    fetchData()
  }

  return (
    <Card >
      <p>{props.location.city}, {props.location.country}</p>
      <p>{props.index} {props.isMetric ? 'Metric' : 'Imperial'}</p>
      <Button variant="outlined">Expand</Button>
    </Card>
  )
}

export default WeatherCard;
