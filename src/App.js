import React, { useState } from 'react';
import Box from '@material-ui/core/Box'
import Form from './components/Form/Form';
import WeatherList from './components/Weather/WeatherList';

import './App.css'

function App() {
  const testCity1 = {city: "Seattle", country: "US"} 
  const testCity2 = {city: "Philadelphia", country: "US"}
  const [isMetric, setMetric] = useState(true);
  const [locations, setLocations] = useState([testCity1, testCity2]);
  const [error, setError] = useState(null);

  function toggleMetric() {
    setMetric(!isMetric);
  }

  function throwError(err) {
    // TODO: Errors shown in a pop up 
    alert(err);
    console.log(err)
  }

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city && country) {
      setLocations(([...locations, {city: city, country: "US"}]))
      console.log("New location added - City:", city, "Country:",  country)
      console.log(locations)
    }
    else {
      const errorMsg = "Please fill in the fields"
      throwError(errorMsg)
      setError(errorMsg)
    }
  }
  
  return (
    <Box className = "Box"  >
        <Form getWeather={ getWeather } setLocations={ setLocations } isMetric={ isMetric } toggleMetric={ toggleMetric }/>
        <WeatherList locations={ locations } isMetric={ isMetric } throwError={ throwError }/>
    </Box>
  );
}

export default App;
