import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})


function Form(props) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="default">
        <form>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button>Submit</button>
        </form>
      </AppBar>

    </div>
  )
}

export default Form;
