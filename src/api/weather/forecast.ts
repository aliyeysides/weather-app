import { get } from "../api";
import { Forecast } from '../../models/weather';

export const forecast = (city: string, country: string): Promise<Forecast> =>
  get(
    `forecast?q=${city},${country}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
  );
