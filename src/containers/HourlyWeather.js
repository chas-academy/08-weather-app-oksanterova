import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Flex, { FlexItem } from "styled-flex-component";
import {
  SectionHeader,
  WeatherSection,
  HourWeatherSectionHeader,
  HourWeatherSectionBody,
  Hours,
  HourlyWeatherIcon,
  SecondaryTemperature,
  HourlySummary,
  DailySummary
} from "../components/Weather.js";

export const HourlyWeatherSection = ({ weather }) => {
  return (
    <WeatherSection>
      <HourWeatherSectionHeader>
        <HourlyWeatherIcon icon={weather.icon} />
        <SecondaryTemperature>{Math.round(weather.temperature)}</SecondaryTemperature>
        <Hours>1pm</Hours>
      </HourWeatherSectionHeader>
      <HourWeatherSectionBody>
        <HourlySummary>{weather.summary}</HourlySummary>
        <div>
          Risk of precipitation: {Math.round(weather.precipProbability * 100)}%{" "}
        </div>
        <div>Cloud cover: {Math.round(weather.cloudCover * 100)}%</div>
      </HourWeatherSectionBody>
    </WeatherSection>
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
  weather: weatherPropTypes
};

export const HourlyWeather = ({ summary, hourlyWeather }) => {
  return (
    <div>
      <SectionHeader>
        Next Few Hours <DailySummary>{summary}</DailySummary>
      </SectionHeader>
      <Flex justifyBetween wrap>
        {hourlyWeather.map(weather => (
          <FlexItem>
            <HourlyWeatherSection weather={weather} />
          </FlexItem>
        ))}
      </Flex>
    </div>
  );
};

HourlyWeather.propTypes = {
  summary: PropTypes.string,
  hourlyWeather: PropTypes.arrayOf(weatherPropTypes)
};

const mapStateToProps = state => {
  const data = (state.weather.data || {}).hourly;

  const maxElements = 5;
  const hourlyWeather = data.data
    .filter((el, index) => index % 3 === 0)
    .slice(0, maxElements);

  return {
    summary: data.summary,
    hourlyWeather: hourlyWeather
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HourlyWeather);
