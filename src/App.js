import React, { useState } from 'react';
import Box from '@material-ui/core/Box'
import Form from './components/Form/Form';
import WeatherList from './components/Weather/WeatherList';

import './App.css'

function App() {
  const [isMetric, setMetric] = useState(true);
  const [locations, setLocations] = useState([{city: "Seattle", country: "US"}, {city: "Philadelphia", country: "US"}])

  function toggleMetric() {
    setMetric(!isMetric);
  }

  function throwError() {
    alert("test error");
  }

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city && country) {
      console.log("New location added - City:", city, "Country:",  country)
      setLocations(([...locations, {city: city, country: "US"}]))
      console.log(locations)
      throwError()
    }
  }
  
  return (
    <Box className = "Box"  >
        <Form getWeather={ getWeather } setLocations={ setLocations } isMetric={ isMetric } toggleMetric={ toggleMetric }/>
        <WeatherList locations={ locations } isMetric={ isMetric }/>
    </Box>
  );
}

export default App;
