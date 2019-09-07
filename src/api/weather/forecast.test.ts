import { forecast } from "./forecast";
import { Forecast } from "../../models/weather";

it("can retrieve the forecast", async () => {
  const philyForecast: Forecast = await forecast("Philadelphia", "US").then(
    val => val
  );
  expect(philyForecast.city.name).toBe("Philadelphia");
});
