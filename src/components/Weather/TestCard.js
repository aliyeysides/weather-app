import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Grid } from '@material-ui/core/';
import './WeatherCard.css'
import CardHeader from './CardHeader';
import Forecast from './Forecast';
import TimeForm from './TimeForm';


function TestCard(props) {
	const URL = "http://api.openweathermap.org/data/2.5/forecast?q=" + props.location.city + "," + props.location.country + "&appid=" + process.env.REACT_APP_OPENWEATHERMAP_API_KEY
	
	const fetchData = async () => {
		const result = await axios(
			URL,
		);
		console.log("DATA FOR TESTCARD", result.data)
	}
	
	function deleteIcon() {
		console.log("deleted")
	}
	
	useEffect(() => {

		fetchData();
	}, []);

  return (
    <Card className="weather-card">
			<Grid container direction="column" justify="center" spacing={2}>
				<Grid item xs={12}>
					<CardHeader deleteIcon={deleteIcon} location={props.location}/> 
				</Grid>
				<Grid item xs={12}>
					<Forecast />
				</Grid>
				<Grid item xs={12}>
					<TimeForm />
				</Grid>
			</Grid>
     </Card>
    )


}

export default TestCard;
