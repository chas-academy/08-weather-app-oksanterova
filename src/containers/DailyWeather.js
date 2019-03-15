import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Flex, { FlexItem } from "styled-flex-component";
import moment from "moment";
import {
  SectionHeader,
  DailySectionHeader,
  WeatherSection,
  DailySectionBody,
  Time,
  Title,
  DailyWeatherIcon,
  SecondaryTemperature,
  TemperatureMin,
  WeatherSummary,
  DailySummary
} from "../components/Weather.js";

export const DailyWeatherSection = ({ weather, units }) => {
  const time = moment(weather.time * 1000);
  const sunriseTime = moment(weather.sunriseTime * 1000);
  const sunsetTime = moment(weather.sunsetTime * 1000);

  return (
    <WeatherSection>
      <DailySectionHeader>
        <Time>
          {time.format("dddd")}, {time.format("MMM Do")}
        </Time>
      </DailySectionHeader>
      <DailySectionBody>
        <Flex full>
          <FlexItem order="1">
            <DailyWeatherIcon icon={weather.icon} />
          </FlexItem>
          <FlexItem order="2">
            <div>
              <SecondaryTemperature
                temperature={weather.temperatureMax}
                unit={units.temperatureMax}
              />
              {"  "}
              <TemperatureMin
                temperature={weather.temperatureMin}
                unit={units.temperatureMin}
              />
            </div>
            <WeatherSummary>{weather.summary}</WeatherSummary>
            <div> Humidity: {weather.humidity * 100}% </div>
            <div>
              Wind: {weather.windDirection} {weather.windSpeed} {units.windSpeed}{" "}
            </div>
            <div>
              {" "}
              Risk of precipitation:{" "}
              {Math.round(weather.precipProbability * 100)}%{" "}
            </div>
            <div>Cloud cover: {Math.round(weather.cloudCover * 100)}%</div>
            <div> Sunrise: {sunriseTime.format("h:mm")}</div>
            <div> Sunset: {sunsetTime.format("h:mm")}</div>
          </FlexItem>
        </Flex>{" "}
      </DailySectionBody>
    </WeatherSection>
  );
};

export const DailyWeather = ({ summary, dailyWeather, units }) => {
  return (
    <div>
      <SectionHeader>
        <Title>Week Forecast</Title> <DailySummary>{summary}</DailySummary>
      </SectionHeader>
      <Flex justifyEvenly wrap>
        {dailyWeather.map(weather => (
          <FlexItem>
            <DailyWeatherSection weather={weather} units={units} />
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
  const units = (state.weather.data || {}).units;

  const dailyWeather = data.data

  const summary = data.summary;

  return {
    summary,
    dailyWeather,
    units
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyWeather);
