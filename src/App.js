import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box'
import './App.css'
import CardList from './components/CardList';
import Form from './components/Form';
import Grid from '@material-ui/core/Grid';

function handleSubmit() {
  console.log('submitted')
}

function App() {
  const [data, setData] = useState({ hits: [] });
  // const [cities, setCities] = useState({city: "Philadelphia", country: "USA"})

  const [cities, setCities] = useState([{city: "Philadelphia", country: "USA"}])
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
        <CardList cities = {cities}/>
    </Box>
  );
}

export default App;
