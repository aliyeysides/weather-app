import React from 'react';
import { Grid } from '@material-ui/core/';

function CardContent(props) {
  function humidity() {
    if (props.list) {
      console.log(props.list);
    }
  return (<i className="wi wi-windy"></i>)
  }
  return (
    <Grid container className="forecast" direction="row" justify="flex-start" alignItems="stretch">
      <Grid item xs={6}>
        <i className="wi wi-day-storm-showers"></i>
      </Grid>
      <Grid item xs={6}>
        <i className="wi wi-meteor"></i>
        <p> {humidity()}</p>
        <p> Wind: {  } </p>
      </Grid>
    </Grid>
  )
}

export default CardContent;