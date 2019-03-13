import React from "react";
import { storiesOf } from "@storybook/react";
import {
  HourlyWeatherSection,
  HourlyWeather
} from "../containers/HourlyWeather";
import Loader from "../components/Loader";

const clearDay = {
  icon: "clear-day",
  temperature: "13.3",
  summary: "Clear Day",
  precipProbability: "0.53",
  cloudCover: "0.13"
};

const rain = {
  icon: "rain",
  temperature: "3.1",
  summary: "Clear Day",
  precipProbability: "0.9",
  cloudCover: "0.9"
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
storiesOf("HourlyWeatherSection", module).add("clear-day", () => (
  <HourlyWeatherSection weather={clearDay} />
));

storiesOf("HourlyWeather", module).add("clear-day", () => (
  <HourlyWeather
    summary={"text"}
    hourlyWeather={[clearDay, rain, rain, rain, clearDay]}
  />
));
