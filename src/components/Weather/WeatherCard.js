import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './WeatherCard.css'

function WeatherCard(props) {
  const URL = "http://api.openweathermap.org/data/2.5/weather?q=" + props.location.city + "," + props.location.country + "&appid=" + process.env.REACT_APP_OPENWEATHERMAP_API_KEY
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
  var t;

  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        URL,
      );
      console.log(result.data)
      setData(result.data);
      console.log(data.hits)
      console.log(t)
      var API_response = result.data
      setCoord({lon: API_response.coord.lon, lat: API_response.coord.lat})
      setWeather(API_response.weather[0].id)
      // setWeather(API_response.main.temp)
      setTemperature(API_response.main.temp)
      setIcon(API_response.weather[0].icon)
      setTimezone(API_response.timezone)
    }
    fetchData();
    printAll();
  }, []);
  
  function printAll() {
    console.log("Data fetched for", props.location.city, "-", coord, weather, main, sys, timezone, weatherID)
  }

  function convertIcon(icon)  {
    var convertedIcon = "wi-";
    if (icon) {
      var condition = icon.substring(0,2);
      var time = icon.substring(2);
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
  }

  function convertTemperature(temp) {
    if (props.isMetric) {
      return Math.round(temp - 273.15)
    }
    if (!props.isMetric) {
      return Math.round((temp - 273.15) * 9/5 + 32)
    }
  }

  return (
    <Card className="WeatherCard">
      <p>{props.location.city}, {props.location.country}</p>
      <CardMedia>
        {convertIcon(icon)}
      </CardMedia>
      <CardContent>
        <p><i className="wi wi-thermometer"></i> - {convertTemperature(temperature)} {props.isMetric ? <i className="wi wi-celsius"></i> : <i className="wi wi-fahrenheit"></i>}</p>  
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
