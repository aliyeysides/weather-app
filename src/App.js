import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box'
import './App.css'
import WeatherCard from './components/WeatherCard';
import Form from './components/Form';
import Grid from '@material-ui/core/Grid';

function handleSubmit() {
  console.log('submitted')
}

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Philadelphia,US&appid=' + process.env.REACT_APP_WEATHER_API_KEY
    const fetchData = async () => {
      const result = await axios(
        URL,
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Box className="Box">
        <Form onSubmit={handleSubmit}/>
        <WeatherCard />
    </Box>
  );
}

export default App;
