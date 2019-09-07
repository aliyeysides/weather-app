import { forecast } from "./forecast";

it("can retrieve the forecast", async () => {
  const philyForecast = await forecast("Philadelphia,US").then(val => val);
  expect(philyForecast.city.name).toBe("Philadelphia");
});
