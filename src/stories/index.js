import React from "react";
import { storiesOf } from "@storybook/react";
import { Weather } from "../containers/Weather";
import Loader from "../components/Loader";
import ReactSkycons from "react-skycons";

storiesOf("Weather", module)
  .add("loading", () => <Weather loading={true} />)
  .add("rain", () => <Weather loading={false} data={{ icon: "rain" }} />)
  .add("clear_day", () => (
    <Weather loading={false} data={{ icon: "clear_day" }} />
  ));

storiesOf("Loader", module).add("loading", () => <Loader />);

storiesOf("ReactSkycons", module).add("loading", () => (
  <ReactSkycons icon="CLOUDY" />
));
