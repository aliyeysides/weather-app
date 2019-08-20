import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
// import Typography from '@material-ui/core/Typography';
// label={ props.isMetric ? 'Metric' : 'Imperial'}
function Form(props) {
  return (
    <AppBar position="static" color="default">
      <ToolBar>
        <form className = "form" onSubmit={ props.getWeather }>
          <div class="inputContainer" >
            <TextField type="text" name="city" placeholder="City" />
            <TextField type="text" name="country" placeholder="Country" />
            <Button type="submit" variant="contained" size="small">Submit</Button>
          </div>
            <Switch onChange={(e) => props.toggleMetric() } color="primary" />
        </form>
      </ToolBar>
    </AppBar>
  )
}

export default Form;
