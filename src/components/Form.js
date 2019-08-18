import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



function Form(props) {
  return (
    <div>
        <AppBar position="static" color="default">
          <form onSubmit={props.getWeather}>
            <TextField type="text" name="city" placeholder="City" />
            <TextField type="text" name="country" placeholder="Country" />
            {/* <button>Submit</button> */}
            <Button variant="contained" size="small" color="primary" >Submit</Button>
          </form>
      </AppBar>
    </div>
  )
}

export default Form;
