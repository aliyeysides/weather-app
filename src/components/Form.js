import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
// import Typography from '@material-ui/core/Typography';
function Form(props) {
  return (
    <AppBar position="static" color="default">
      <ToolBar>
        <form onSubmit={ props.getWeather }>

            <TextField type="text" name="city" placeholder="City" />
            <TextField type="text" name="country" placeholder="Country" />
            <Button type="submit" variant="contained" size="small">Submit</Button>
            <Switch onChange={(e) => props.setMetric(!e) } color="primary" label={ props.isMetric ? 'Metric' : 'Imperial'}/>
        </form>
      </ToolBar>
    </AppBar>
  )
}

export default Form;
