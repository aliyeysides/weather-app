import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box'
import './App.css'
import WeatherCard from './components/WeatherCard';
import Form from './components/Form';
import Grid from '@material-ui/core/Grid';

console.log(process.env.REACT_APP_WEATHER_API_KEY)

function handleSubmit() {
  console.log('submitted')
}

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        //'http://hn.algolia.com/api/v1/search?query=redux',
        'api.openweathermap.org/data/2.5/weather?q=London',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Box>
        <Form onSubmit={handleSubmit}/>
        <WeatherCard />

    </Box>
  );
}

export default App;
