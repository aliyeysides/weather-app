import React from 'react';
import Box from '@material-ui/core/Box'
import WeatherCard from './WeatherCard'
import TestCard from './TestCard'

import './WeatherList.css'

function WeatherCards(props) {
  function testItems() {
    return props.locations.map((location, index) => {
      return (<TestCard location={location} key={index} index={index} isMetric={ props.isMetric } throwError={ props.throwError }/>
        )
    });
  }

  function renderItems() {
    return props.locations.map((location, index) => {
      return (<WeatherCard location={location} key={index} index={index} isMetric={ props.isMetric } throwError={ props.throwError }/>
        )
    });
  }

  return (
    <div>
      <Box className="WeatherCardsContainer" display="flex">
        { testItems() }
      </Box>

      
    </div>
  )
}

export default WeatherCards;
