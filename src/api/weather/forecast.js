import { get } from "../api";

export const forecast = (city, country) =>
  get(
    `forecast?q=${city},${country}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
  );
