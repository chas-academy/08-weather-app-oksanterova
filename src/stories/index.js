import React from "react";
import { storiesOf } from "@storybook/react";
import { HourlyWeather } from "../containers/HourlyWeather";
import moment from "moment";

const clearDay = {
  icon: "clear-day",
  temperature: 13.3,
  summary: "Clear Day",
  precipProbability: 0.53,
  cloudCover: 0.13,
  dateTime: moment.now()
};

const rain = {
  icon: "rain",
  temperature: "3.1",
  summary: "Clear Day",
  precipProbability: "0.9",
  cloudCover: "0.9"
};

const units = {
  apparentTemperature: "c",
  dewPoint: "c",
  nearestStormDistance: "km",
  precipAccumulation: "cm",
  precipIntensity: "mm/h",
  precipIntensityMax: "mm/h",
  pressure: "hPa",
  temperature: "c",
  temperatureMax: "c",
  temperatureMin: "c",
  visibility: "km",
  windSpeed: "mps"
};

/*
storiesOf("Weather", module)
  .add("loading", () => <CurrentWeather loading={true} />)
  .add("rain", () => <CurrentWeather loading={false} data={{ icon: "rain" }} />)
  .add("clear-day", () => (
    <CurrentWeather
      loading={false}
      data={{ summary: "Sunny Day in Stockholm", icon: "clear-day" }}
    />
  ))
  .add("fog", () => (
    <CurrentWeather
      loading={false}
      data={{
        summary: "It hard to see anything",
        temperature: 13.3,
        icon: "fog"
      }}
    />
  ));

storiesOf("Loader", module).add("loading", () => <Loader />);

storiesOf("WeatherIcon", module).add("clear-day", () => (
  <WeatherIcon icon="clear-day" />
));
*/

storiesOf("HourlyWeather", module).add("clear-day", () => (
  <HourlyWeather
    summary={"text"}
    hourlyWeather={[clearDay, rain, rain, rain, clearDay]}
    units={units}
  />
));
