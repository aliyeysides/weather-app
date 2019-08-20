import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box'
import './App.css'
import CardList from './components/CardList';
import Form from './components/Form';
import Grid from '@material-ui/core/Grid';

function onFormSubmit(e) {
  e.preventDefault()
  console.log('You typed')
}

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
    };

    fetchData();
  }, []);

  function toggleMetric() {
    setMetric(!isMetric)
    console.log("togglemetric")
  }
  const getWeather = async (e) => {
    console.log('hello')
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
        <Form getWeather={ getWeather } setCities={ setCities } toggleMetric={ toggleMetric }/>
        <CardList cities={ cities }/>
    </Box>
  );
}

export default App;
