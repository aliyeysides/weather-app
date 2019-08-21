import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box'
import Form from './components/Form/Form';
import WeatherCard from './components/Weather/WeatherCard';
import WeatherList from './components/Weather/WeatherList';

import './App.css'

function App() {
  const [isMetric, setMetric] = useState(true);
  const [locations, setLocations] = useState([{city: "Seattle", country: "US"}, {city: "Philadelphia", country: "US"}])

  useEffect(() => {
    //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

  }, []);

  function toggleMetric() {
    setMetric(!isMetric);
  }

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city && country) {
    console.log("New location added - City:", city, "Country:",  country)
    }
  }
  //, setCities, isMetric, setMetric
  
  return (
    <Box className = "Box"  >
        <Form getWeather={ getWeather } setLocations={ setLocations } isMetric={ isMetric } toggleMetric={ toggleMetric }/>
        <WeatherList locations={ locations } isMetric={ isMetric }/>

    </Box>
  );
}

export default App;
