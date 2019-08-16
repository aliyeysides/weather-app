import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

function CardList(props) {
  //  var t = props.cities.city
  console.log(props)
  function createCards(data) {
    
  }
  return (
    <Card >
      <p>Card Component</p>
      {/* <p>{t}</p> */}
      <Button size="small">Learn More</Button>
    </Card>
  )
}

export default CardList;
