import React from "react";
import Box from "@material-ui/core/Box";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

import "./WeatherCards.css";

function WeatherCards({ locations, isMetric, throwError }) {
  return (
    <div>
      <Box className="WeatherCardsContainer" display="flex">
        {locations.map((location, index) => {
          return (
            <WeatherCard
              location={location}
              key={index}
              index={index}
              isMetric={isMetric}
              throwError={throwError}
            />
          );
        })}
      </Box>
    </div>
  );
}

export default WeatherCards;
