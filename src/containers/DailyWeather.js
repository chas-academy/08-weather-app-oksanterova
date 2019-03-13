import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Flex, { FlexItem } from "styled-flex-component";
import {
  SectionHeader,
  DailySectionHeader,
  WeatherSection,
  DailySectionBody,
  Time,
  DailyWeatherIcon,
  SecondaryTemperature,
  TemperatureMin,
  WeatherSummary,
  DailySummary
} from "../components/Weather.js";

export const DailyWeatherSection = ({ weather }) => {
  return (
    <WeatherSection>
      <DailySectionHeader>
        <Time>Wednesday, Mar 12th</Time>
      </DailySectionHeader>
      <DailySectionBody>
        <Flex full>
          <FlexItem order="1">
            <DailyWeatherIcon icon={weather.icon} />
          </FlexItem>
          <FlexItem order="2">
            <div>
              <SecondaryTemperature>
                {Math.round(weather.temperatureMax)}
              </SecondaryTemperature>
              {"  "}
              <TemperatureMin>
                {Math.round(weather.temperatureMin)}
              </TemperatureMin>
            </div>
            <WeatherSummary>{weather.summary}</WeatherSummary>
            <div> Humidity: {weather.humidity * 100}% </div>
            <div>
              Wind: {weather.windDirection} {weather.windSpeed} km/h{" "}
            </div>
            <div>
              {" "}
              Risk of precipitation:{" "}
              {Math.round(weather.precipProbability * 100)}%{" "}
            </div>
            <div>Cloud cover: {Math.round(weather.cloudCover * 100)}%</div>
            <div> Sunrise: {weather.sunriseTime}</div>
            <div> Sunset: {weather.sunsetTime}</div>
          </FlexItem>
        </Flex>{" "}
      </DailySectionBody>
    </WeatherSection>
  );
};

export const DailyWeather = ({ summary, dailyWeather }) => {
  return (
    <div>
      <SectionHeader>
        Week Forecast <DailySummary>{summary}</DailySummary>
      </SectionHeader>
      <Flex justifyBetween wrap>
        {dailyWeather.map(weather => (
          <FlexItem>
            <DailyWeatherSection weather={weather} />
          </FlexItem>
        ))}
      </Flex>
    </div>
  );
};

const weatherPropTypes = PropTypes.shape({
  icon: PropTypes.string,
  summary: PropTypes.string,
  temperature: PropTypes.number,
  precipProbability: PropTypes.number,
  cloudCover: PropTypes.number
});

WeatherSection.propTypes = {
  summary: PropTypes.string,
  hourlyWeather: PropTypes.arrayOf(weatherPropTypes)
};

const mapStateToProps = state => {
  const data = (state.weather.data || {}).daily;

  const dailyWeather = data.data;

  return {
    summary: data.summary,
    dailyWeather: dailyWeather
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyWeather);
