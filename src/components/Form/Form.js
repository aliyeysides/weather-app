import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import ToolBar from '@material-ui/core/ToolBar'
import './Form.css'

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
