import React from 'react';
import { Grid } from '@material-ui/core/';

function Forecast({ list, totalHours }) {
  function humidity() {
    if (list) {
      console.log(list);
    }
    return (totalHours/3);
  }
  return (
    <Grid container className="forecast" direction="row" justify="flex-start" alignItems="stretch">
      <Grid item xs={6}>
        <i className="wi wi-day-storm-showers"></i>
      </Grid>
      <Grid item xs={6}>
      <i className="wi wi-meteor"></i>

        <p> {humidity()}</p>
      </Grid>
    </Grid>
  )
}

export default Forecast;