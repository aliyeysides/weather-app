import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import './App.css'
import Card from './components/Card';
import Form from './components/Form';

console.log(process.env.REACT_APP_WEATHER_API_KEY)

function handleSubmit() {
  console.log('submitted')
}

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://hn.algolia.com/api/v1/search?query=redux',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Container className="container" maxWidth="md">
        <Form onSubmit={handleSubmit}/>
        <Card />
        <p>test</p>
    </Container>
  );
}

export default App;
