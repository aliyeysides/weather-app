import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

function CardList(props) {
  //  var t = props.cities.city
  useEffect(() => {
    createCards()

  }, []);

  function createCards() {
    props.cities.map(x => console.log(x))
  }

  return (
    <Box display="flex">
      <Card >
        <p>Philadelphia, PA</p>
        {/* <p>{t}</p> */}
        <Button size="small">Learn More</Button>
      </Card>
      <Card >
      <p>Card Component</p>
      {/* <p>{t}</p> */}
      <Button size="small">Learn More</Button>
      </Card>
      <Card >
      <p>Card Component</p>
      {/* <p>{t}</p> */}
      <Button size="small">Learn More</Button>
      </Card>
      
    </Box>
  )
}

export default CardList;
