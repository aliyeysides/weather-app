import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Slider from '@material-ui/core/Slider';
import './WeatherCard.css'

const marks = [
  {
    value: 0,
    label: "0h",
  },
  {
    value: 3,
    label: "3h",
  },
  {
    value: 6,
    label: "6h",
  },
  {
    value: 9,
    label: "9h",
  },
]
function valuetext(value) {
  return `${value} h`;
}
function WeatherCard(props) {
  //take forecast next time
  const URL = "http://api.openweathermap.org/data/2.5/weather?q=" + props.location.city + "," + props.location.country + "&appid=" + process.env.REACT_APP_OPENWEATHERMAP_API_KEY
  // variables are structured to follow the API response
  const [data, setData] = useState({ hits: []})
  const [coord, setCoord] = useState({lon: 0, lat: 0});
  const [weather, setWeather] = useState();
  const [main, setMain] = useState();
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
    return <i className="wi wi-day-fog"></i>
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
    <Card className="weather-card">
      <div className="city-and-country">{props.location.city}, {props.location.country}</div>
        <div className="temperature-box">
          <div className="icon">
          </div>
          <div className="temperature">
          {convertIcon(icon)}

            {convertTemperature(temperature)} 
            {props.isMetric ? <i className="wi wi-celsius"></i> : <i className="wi wi-fahrenheit"></i>}
          </div>
        </div>
        <div> Weather: {weather} / index: {props.index}
</div>

        <div className="sliders">
          <p>Time - 00:00:00</p>
          <p>Set Day</p>
          <Slider defaultValue={1} getAreaValueText={valuetext} aria-labelledby="discrete-slider" valueLabelDisplay="auto" step={1} marks min={1} max={5}></Slider>  
          <p>Set Hours</p>
          <Slider 
            defaultValue={3} getAreaValueText={valuetext} aria-labelledby="discrete-slider" valueLabelDisplay="auto"
            step={3} 
            marks min={0} max={21}>
          </Slider>
        </div>
          </Card>
  )
}

export default WeatherCard;
