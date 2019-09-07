import React from "react";
import { Grid, IconButton } from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import { Location } from "../../models/weather";

interface CardHeaderProps {
  timezone: number;
  location: Location;
  deleteIcon: () => void;
}

function CardHeader({
  timezone,
  location,
  deleteIcon
}: CardHeaderProps): JSX.Element {
  function printTimezone() {
    var tz = "UTC";
    if (timezone === 0) {
      return tz;
    } else if (timezone > 0) {
      tz += " +";
      var t = timezone / 60 / 60;

      tz += t;
    } else {
      tz += " " + timezone / 60 / 60;
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
        {location.city}, {location.country}
      </Grid>
      <Grid item xs={3}>
        {printTimezone()}
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={deleteIcon} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default CardHeader;
