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

storiesOf("HourlyWeather", module).add("clear-day", () => (
  <HourlyWeather
    summary={"text"}
    hourlyWeather={[clearDay, rain, rain, rain, clearDay]}
    units={units}
  />
));
