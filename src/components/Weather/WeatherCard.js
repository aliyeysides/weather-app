import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Grid } from '@material-ui/core/';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardInput from './CardInput';
import './WeatherCard.css'

function WeatherCard(props) {
  const [currentForecast, setCurrentForecast] = useState()
  const [forecasts, setForecasts] = useState()
  const [timezone, setTimezone] = useState()
  const [totalHours, setTotalHours] = useState(0)

  async function fetchData () {
		// delete the card if it does not work
		const URL = "http://api.openweathermap.org/data/2.5/forecast?q=" + props.location.city + "," + props.location.country + "&appid=" + process.env.REACT_APP_OPENWEATHERMAP_API_KEY

		const result = await axios(
			URL,
    );
		console.log("DATA FOR WEATHERCARD", result.data)
    setTimezone(result.data.city.timezone)
    setForecasts(result.data.list)
	}
	
	function deleteIcon() {
		console.log(forecasts[0].main.humidity)
		currentWeather()
	}
	
	useEffect(() => {
		fetchData();
	}, []);

	function currentWeather() {
		console.log("humidity:" + forecasts[(totalHours / 3)].main.humidity + ", total hours:" + totalHours)
		return (forecasts[(totalHours / 3)].main.humidity )
	}

  return (
    <Card className="weather-card">
			<Grid container direction="column" justify="center" spacing={2}>
				<Grid item xs={12}>
					<CardHeader deleteIcon={deleteIcon} timezone={timezone} location={props.location}/> 
				</Grid>
				<Grid item xs={12}>
					<CardContent currentWeather={currentWeather()} forecasts={forecasts} totalHours={totalHours}/>
				</Grid>
				<Grid item xs={12}>
					<CardInput setTotalHours={setTotalHours} />
				</Grid>
			</Grid>
    </Card>
  )
}

export default WeatherCard;
