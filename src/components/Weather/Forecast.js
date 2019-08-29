import React from 'react';
import { Grid } from '@material-ui/core/';

function Forecast(props) {
  return (
    <Grid container className="forecast" direction="row" justify="flex-start" alignItems="stretch">
      <Grid item xs={6}>
        <i className="wi wi-day-storm-showers"></i>
      </Grid>
      <Grid item xs={6}>
        <i className="wi wi-meteor"></i>
      </Grid>
    </Grid>
  )
}

export default Forecast;