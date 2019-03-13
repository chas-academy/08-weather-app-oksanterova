import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Flex, { FlexItem } from "styled-flex-component";
import moment from "moment";
import {
  WeatherSection,
  WeatherSectionHeader,
  WeatherSectionBody,
  Time,
  CurrentWeatherIcon,
  Temperature,
  WeatherSummary
} from "../components/Weather.js";

export const CurrentWeather = ({ data }) => {
  return (
    <WeatherSection>
      <WeatherSectionHeader>
        <h2>
          Current Conditions <Time>{moment().format("h:mm a")}</Time>
        </h2>
      </WeatherSectionHeader>
      <WeatherSectionBody>
        <Flex full>
          <FlexItem order="1">
            <CurrentWeatherIcon icon={data.icon} />
          </FlexItem>
          <FlexItem order="2">
            <Temperature>{Math.round(data.temperature)}</Temperature>{" "}
            <WeatherSummary>{data.summary}</WeatherSummary>
            <div> Humidity: {Math.round(data.humidity * 100)}% </div>
            <div>
              Wind: {data.windDirection} {data.windSpeed} km/h{" "}
            </div>
            <div> Feels like: {Math.round(data.apparentTemperature)}°</div>
            <div>
              {" "}
              Risk of precipitation: {Math.round(
                data.precipProbability * 100
              )}%{" "}
            </div>
            <div> Cloud cover: {data.cloudCover * 100}% </div>
            <div> Pressure: {data.pressure} mb </div>
            <div> Visibility: {data.visibility} km </div>
            <div> UV Index: {data.uvIndex}</div>
          </FlexItem>
        </Flex>{" "}
      </WeatherSectionBody>
    </WeatherSection>
  );
};

CurrentWeather.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string,
    summary: PropTypes.string,
    temperature: PropTypes.number
  })
};

const mapStateToProps = state => {
  const data = (state.weather.data || {}).currently;

  return { data };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeather);
