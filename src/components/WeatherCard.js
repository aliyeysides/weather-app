import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

function WeatherCard() {
  return (
    <Card >
      <p>Card Component</p>
      <Button size="small">Learn More</Button>
    </Card>
  )
}

export default WeatherCard;
