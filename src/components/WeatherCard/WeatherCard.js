import React, { useState, useEffect } from "react";
import { Card, Grid } from "@material-ui/core/";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardInput from "./CardInput";
import "./WeatherCard.css";
import { forecast } from "../../api/weather/forecast.ts";

function WeatherCard({ location, isMetric }) {
  //   const [currentForecast, setCurrentForecast] = useState();
  const [forecasts, setForecasts] = useState();
  const [timezone, setTimezone] = useState();
  const [totalHours, setTotalHours] = useState(0);

  function setResults(result) {
    setTimezone(result.city.timezone);
    setForecasts(result.list);
  }

  function deleteIcon() {
    console.log(forecasts[0].main.humidity);
    currentWeather();
  }

  useEffect(() => {
    forecast(location.city, location.country)
      .then(res => setResults(res))
      .catch(err => console.error(err));
  }, [location]);

  function currentWeather() {
    console.log(
      "humidity:" +
        forecasts[totalHours / 3].main.humidity +
        ", total hours:" +
        totalHours
    );
    return forecasts[totalHours / 3].main.humidity;
  }

  return (
    <Card className="weather-card">
      <Grid container direction="column" justify="center" spacing={2}>
        <Grid item xs={12}>
          <CardHeader
            deleteIcon={deleteIcon}
            timezone={timezone}
            location={location}
          />
        </Grid>
        <Grid item xs={12}>
          <CardContent forecasts={forecasts} totalHours={totalHours} />
        </Grid>
        <Grid item xs={12}>
          <CardInput setTotalHours={setTotalHours} />
        </Grid>
      </Grid>
    </Card>
  );
}

export default WeatherCard;
