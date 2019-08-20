import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import './WeatherCards.css'

function WeatherCards(props) {
  useEffect(() => {
    createCards()
    fetchAPI()
  }, []);

  function fetchAPI() {

  }
  function createCards() {
    props.cities.map((x) => console.log(x))
  }

  return (
    <Box display="flex">
      <Card >
        <p>Philadelphia, PA</p>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <Button size="small">Learn More</Button>
      </Card>
      <Card >
      <p>Card Component</p>
      <Button size="small">Learn More</Button>
      </Card>

    </Box>
  )
}

export default WeatherCards;
