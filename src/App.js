import React, { useState } from 'react';
import Box from '@material-ui/core/Box'
import Form from './components/Form/Form';
import WeatherList from './components/Weather/WeatherList';

import './App.css'

function App() {
  const testCities = [{city: "Philadelphia", country: "US"}, {city: "Seoul", country: "KR"}]; // customize default locations heree
  const [isMetric, setMetric] = useState(true);
  const [locations, setLocations] = useState(testCities); // omit testCities to disable default locations
  const [error, setError] = useState(null);

  function toggleMetric() {
    setMetric(!isMetric);
  }

  function throwError(err) {
    // TODO: Errors shown in a pop up 
    alert(err);
    setError(err)
    console.log(error)
  }

  async function getWeather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city && country) {
      setLocations(([...locations, {city: city, country: country}]))
      console.log("New location added - City:", city, "Country:",  country)
      console.log(locations)
    }
    else {
      const errorMsg = "Please fill in the fields"
      throwError(errorMsg)
    }
  }
  
  return (
    <Box className = "Box">
        <Form getWeather={ getWeather } setLocations={ setLocations } isMetric={ isMetric } toggleMetric={ toggleMetric }/>
        <WeatherList locations={ locations } isMetric={ isMetric } throwError={ throwError }/>
    </Box>
  );
}

export default App;
