import { get } from "../api";

export const forcast = (city, country) =>
  get(
    `forcast?q=${city},${country}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
  );
