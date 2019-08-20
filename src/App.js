import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box'
import Form from './components/Form/Form';
import WeatherCards from './components/WeatherCards/WeatherCards';
import './App.css'

function App() {
  const [data, setData] = useState({ hits: [] });
  const [isMetric, setMetric] = useState(true);
  const [cities, setCities] = useState([{city: "Seoul", country: "South Korea"}, {city: "Philadelphia", country: "USA"}])

  useEffect(() => {
    //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Philadelphia,US&appid=' + process.env.REACT_APP_WEATHER_API_KEY
    const fetchData = async () => {
      const result = await axios(
        URL,
      );
      setData(result.data);
      console.log(result.data)
      console.log('hi')
    };

    fetchData();
  }, []);

  function toggleMetric() {
    setMetric(!isMetric);
  }

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city && country) {
      console.log("City: ", city, " Country: ",  country)
    }
  }

  //, setCities, isMetric, setMetric
  return (
    <Box className = "Box" >
        <Form getWeather={ getWeather } setCities={ setCities } isMetric = { isMetric } toggleMetric={ toggleMetric }/>
        <WeatherCards cities={ cities }/>
    </Box>
  );
}

export default App;
