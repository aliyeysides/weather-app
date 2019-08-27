import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './WeatherCard.css'

function WeatherCard(props) {
  // variables are structured to follow the API response
  const [data, setData] = useState({ hits: []})
  const [coord, setCoord] = useState({lon: 0, lat: 0});
  const [weather, setWeather] = useState();
  const [main, setMain] = useState();
  // const [visibility, setVisibility] = useState();
  // const [wind, setWind] = useState();
  // const [clouds, setClouds] = useState();
  // const [dt, setDt] = useState();
  const [sys, setSys] = useState();
  const [timezone, setTimezone] = useState();

  const [temperature, setTemperature] = useState();
  const [icon, setIcon] = useState();
  const [weatherID, setWeatherID] = useState();

  
  useEffect(() => {
    fetchAPI();
  }, []);
  
  function printAll() {
    console.log(coord.lat, coord.lon, weather, main, sys, timezone, weatherID)
  }

  function convertIcon(icon)  {
    let convertedIcon = "wi-";
    if (icon) {
      let condition = icon.substring(0,2);
      let time = icon.substring(2);
      if (time === 'd') {
        convertedIcon += "day";
      }
      else {
        convertedIcon += "night";
      }
      if (condition === "01") {
        convertedIcon += "sunny";
      }
      else if (condition === "02") {
        convertedIcon += ""
      }
    }
    return <i className={convertedIcon}></i>

    // if (icon === '01n') {
    //   return <i class="wi wi-day-sunny"></i>
    // }

    // return <i className="wi wi-day-sunny"></i>
  }

  function convertTemperature(temp) {
    if (props.isMetric) {
      return Math.round(temp - 273.15)
    }
    if (!props.isMetric) {
      return Math.round((temp - 273.15) * 9/5 + 32)
    }
  }

  const URL = "http://api.openweathermap.org/data/2.5/weather?q=" + props.location.city + "," + props.location.country + "&appid=" + process.env.REACT_APP_OPENWEATHERMAP_API_KEY
  async function fetchAPI() {
    const result = await axios(
      URL,
    );
    setData(result.data);
    console.log(data.hits)
    console.log(result.data)
    let API_response = result.data
    setCoord({lon: API_response.coord.lon, lat: API_response.coord.lat})
    setWeather(API_response.weather[0].id)
    console.log(API_response.weather)
    // setWeather(API_response.main.temp)
    setTemperature(API_response.main.temp)
    setIcon(API_response.weather[0].icon)
    setTimezone(API_response.timezone)
    printAll()
  };

  return (
    <Card className="WeatherCard">
      <p>{props.location.city}, {props.location.country}</p>
      <CardMedia>
        {convertIcon(icon)}
      </CardMedia>
      <CardContent>
        <p><i className="wi wi-thermometer"></i> : {convertTemperature(temperature)} {props.isMetric ? <i className="wi wi-celsius"></i> : <i className="wi wi-fahrenheit"></i>}</p>  
        <p>Weather: {weather}</p>
      </CardContent>
      <CardActions> 
        <Button variant="outlined">Expand</Button>
        index: {props.index}
      </CardActions> 
    </Card>
  )
}

export default WeatherCard;
