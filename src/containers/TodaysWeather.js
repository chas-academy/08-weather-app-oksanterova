import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Flex, { FlexItem } from "styled-flex-component";
import {
  WeatherSection,
  WeatherSectionHeader,
  WeatherSectionBody,
  Time,
  CurrentWeatherIcon,
  SecondaryTemperature,
  TemperatureMin,
  WeatherSummary
} from "../components/Weather.js";

export const TodaysWeather = ({ data }) => {
  return (
    <WeatherSection>
      <WeatherSectionHeader>
        <h2>
          Today's Forecast <Time>Wednesday, Mar 12th</Time>
        </h2>
      </WeatherSectionHeader>
      <WeatherSectionBody>
        <Flex full>
          <FlexItem order="1">
            <CurrentWeatherIcon icon={data.data[0].icon} />
          </FlexItem>
          <FlexItem order="2">
            <div>
              <SecondaryTemperature>
                {Math.round(data.data[0].temperatureMax)}
              </SecondaryTemperature>
              {"  "}
              <TemperatureMin>{Math.round(data.data[0].temperatureMin)}</TemperatureMin>
            </div>
            <WeatherSummary>{data.data[0].summary}</WeatherSummary>
            <div>
              Risk of precipitation:{" "}
              {Math.round(data.data[0].precipProbability * 100)}%
            </div>
            <div>Cloud cover: {Math.round(data.data[0].cloudCover * 100)}%</div>
            <div> Humidity: {Math.round(data.data[0].humidity * 100)}% </div>
            <div>
              Wind: {data.data[0].windDirection} {data.data[0].windSpeed} km/h
            </div>
            <div> Sunrise: {data.sunriseTime}</div>
            <div> Sunset: {data.sunsetTime}</div>
          </FlexItem>
        </Flex>
      </WeatherSectionBody>
    </WeatherSection>
  );
};

TodaysWeather.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string,
    summary: PropTypes.string,
    temperature: PropTypes.number
  })
};

const mapStateToProps = state => {
  const data = (state.weather.data || {}).daily;

  return { data };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodaysWeather);
