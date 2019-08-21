import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import './WeatherCard.css'

function WeatherCard(props) {
  useEffect(() => {
    fetchAPI()
  }, []);

  const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + props.location.city + ',' + props.location.country + '&appid=' + process.env.REACT_APP_WEATHER_API_KEY
  const fetchData = async () => {
    const result = await axios(
      URL,
    );
    console.log(result.data)
  };
  
  function fetchAPI() {
    fetchData()
  }

  return (
    <Card >
      <p>{props.location.city}, {props.location.country}</p>
      <p>{props.isMetric.toString()}</p>
      <p>{props.index}</p>
      <Typography>Text 1</Typography>
    </Card>
  )
}

export default WeatherCard;
