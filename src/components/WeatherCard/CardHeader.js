import React from "react";
import { Grid, IconButton } from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";

function CardHeader(props) {
  function printTimezone() {
    var tz = "UTC";
    if (props.timezone === 0) {
      return tz;
    } else if (props.timezone > 0) {
      tz += " +";
      var t = props.timezone / 60 / 60;

      tz += t;
    } else {
      tz += " " + props.timezone / 60 / 60;
    }
    return tz;
  }
  return (
    <Grid
      container
      className="card-header"
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={7}>
        {props.location.city}, {props.location.country}
      </Grid>
      <Grid item xs={3}>
        {printTimezone()}
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={props.deleteIcon} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default CardHeader;

// <Grid container className="card-header" direction="row" justify="space-between">
//     <Grid item xs={6}>
//     {props.location.city}, {props.location.country}
//     </Grid>
//     <Grid item xs={3}>
//     <IconButton aria-label="delete">
//           <DeleteIcon />
//         </IconButton>    </Grid>
//   </Grid>
