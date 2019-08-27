import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography';
import './Form.css'

function Form(props) {
  return (
    <AppBar className="AppBar" position="static" color="default">
      <ToolBar>
        <form className="form" onSubmit={ props.getWeather }>
          <div className="LocationInputContainer" >
            <TextField type="text" name="city" placeholder="City" />
            <TextField type="text" name="country" placeholder="Country" />
            <Button type="submit" variant="contained" color="primary" size="small">Submit</Button>
          </div>
          <div className="UnitToggleContainer">
            <Typography variant="h6">{ props.isMetric ? 'Metric' : 'Imperial' }</Typography>
            <Switch onChange={(e) => props.toggleMetric() } color="primary" />
          </div>
        </form>
      </ToolBar>
    </AppBar>
  )
}

export default Form;
