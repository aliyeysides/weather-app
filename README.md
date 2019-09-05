# Weather App

> A weather app built with React 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment setup

1. Clone this repo to your local machine by using:
```
git clone https://github.com/sungyeonu/weather-app.git
```

2. Create a .env file with this line:
```
REACT_APP_OPENWEATHERMAP_API_KEY = d9d324394cc3c0c8114f95f48bf87765
```

Or you can get your own key at https://openweathermap.org/api

3. Install project dependencies by running: 
`yarn install` or `npm install`

4. Then, run the app in development mode: 
`yarn start` or `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Card Contents
- CardHeader.js 
  - City, Country
  - Delete Icon
- Forecast.js
  - Weather Icon
  - Temperature
  - Minimum temperature, Maximum temperature (this deviation is possible for larger cities and megapolises geographically expanded)
  - Humidity, %
  - Cloudiness, %
  - Rain, volume
- TimeForm.js
  - Local Time
  - Time deviation
  - Days slider
  - Hours slider
  
