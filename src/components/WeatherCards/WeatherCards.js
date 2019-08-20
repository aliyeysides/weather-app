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
  function renderItems() {
    return props.cities.map((city, index) => {
      return (<Card ><p>Created with renderItems</p><Typography>Text 1</Typography>
        </Card>)
    });
  }
  function createCards() {
    props.cities.map((x) => console.log(x))
  }

  return (
    <Box className="WeatherCardsContainer" display="flex">
      <Card >
        <p>Philadelphia, PA</p>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <Button size="small">Learn More</Button>
      </Card>
      { renderItems() }
    </Box>
  )
}

export default WeatherCards;
