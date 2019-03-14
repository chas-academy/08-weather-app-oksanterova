import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Flex, { FlexItem } from "styled-flex-component";
import moment from "moment";
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

export const HourlyWeatherSection = ({ weather, units }) => {
  const time = moment(weather.time * 1000);

  return (
    <WeatherSection>
      <HourWeatherSectionHeader>
        <HourlyWeatherIcon icon={weather.icon} />
        <SecondaryTemperature
          temperature={weather.temperature}
          unit={units.temperature}
        />
        <Hours>{time.format("h a")}</Hours>
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

export const HourlyWeather = ({ summary, hourlyWeather, units }) => {
  return (
    <div>
      <SectionHeader>
        Next Few Hours <DailySummary>{summary}</DailySummary>
      </SectionHeader>
      <Flex justifyAround wrap>
        {hourlyWeather.map(weather => (
          <FlexItem>
            <HourlyWeatherSection weather={weather} units={units} />
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
  const units = (state.weather.data || {}).units;
  const summary = data.summary;

  const maxElements = 5;
  const hourlyWeather = data.data
    .filter((el, index) => index % 3 === 0)
    .slice(0, maxElements);

  return {
    summary,
    hourlyWeather,
    units
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HourlyWeather);
