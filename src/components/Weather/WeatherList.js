import React from 'react';
import Box from '@material-ui/core/Box'
import WeatherCard from './WeatherCard'

import './WeatherList.css'

function WeatherCards(props) {
  function renderItems() {
    return props.locations.map((location, index) => {
      return (<WeatherCard location={location} key={index} index={index} isMetric={ props.isMetric } throwError={ props.throwError }/>
        )
    });
  }

  return (
    <div>
      <Box className="WeatherCardsContainer" display="flex">
        { renderItems() }
      </Box>
    </div>
  )
}

export default WeatherCards;
