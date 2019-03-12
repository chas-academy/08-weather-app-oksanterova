import React from "react";
import { storiesOf } from "@storybook/react";
import { CurrentWeather, WeatherIcon } from "../containers/Weather";
import Loader from "../components/Loader";

storiesOf("App", module)
.add()

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
