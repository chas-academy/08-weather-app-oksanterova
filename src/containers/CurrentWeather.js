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
  Title,
  CurrentWeatherIcon,
  Temperature,
  WeatherSummary
} from "../components/Weather.js";

export const CurrentWeather = ({ data, units }) => {
  return (
    <WeatherSection>
      <WeatherSectionHeader>
        <Title>
          Current Conditions <Time>{moment().format("h:mm a")}</Time>
        </Title>
      </WeatherSectionHeader>
      <WeatherSectionBody>
        <Flex full>
          <FlexItem order="1">
            <CurrentWeatherIcon icon={data.icon} />
          </FlexItem>
          <FlexItem order="2">
            <Temperature
              temperature={data.temperature}
              unit={units.temperature}
            />{" "}
            <WeatherSummary>{data.summary}</WeatherSummary>
            <div> Humidity: {Math.round(data.humidity * 100)}% </div>
            <div>
              Wind: {data.windDirection} {data.windSpeed} {units.windSpeed}{" "}
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
            <div> Visibility: {data.visibility} {units.visibility} </div>
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
  const units = (state.weather.data || {}).units;

  return { data, units };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeather);
