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
  SecondaryTemperature,
  TemperatureMin,
  WeatherSummary
} from "../components/Weather.js";

export const TodaysWeather = ({ weather, units }) => {
  const sunriseTime = moment(weather[0].sunriseTime * 1000);
  const sunsetTime = moment(weather[0].sunsetTime * 1000);
  return (
    <WeatherSection>
      <WeatherSectionHeader>
        <h2>
          Today's Forecast{" "}
          <Time>
            {moment().format("dddd")}, {moment().format("MMM Do")}
          </Time>
        </h2>
      </WeatherSectionHeader>
      <WeatherSectionBody>
        <Flex full>
          <FlexItem order="1">
            <CurrentWeatherIcon icon={weather[0].icon} />
          </FlexItem>
          <FlexItem order="2">
            <div>
              <SecondaryTemperature
                temperature={weather[0].temperatureMax}
                unit={units.temperatureMax}
              />
              {"  "}
              <TemperatureMin
                temperature={weather[0].temperatureMin}
                unit={units.temperatureMin}
              />
            </div>
            <WeatherSummary>{weather[0].summary}</WeatherSummary>
            <div>
              Risk of precipitation:{" "}
              {Math.round(weather[0].precipProbability * 100)}%
            </div>
            <div>Cloud cover: {Math.round(weather[0].cloudCover * 100)}%</div>
            <div> Humidity: {Math.round(weather[0].humidity * 100)}% </div>
            <div>
              Wind: {weather[0].windDirection} {weather[0].windSpeed} {units.windSpeed}
            </div>
            <div> Sunrise: {sunriseTime.format("h:mm")}</div>
            <div> Sunset: {sunsetTime.format("h:mm")}</div>
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
  }),
  units: PropTypes.shape({
    temperature: PropTypes.string
  })
};

const mapStateToProps = state => {
  const data = (state.weather.data || {}).daily;
  const units = (state.weather.data || {}).units;
  const weather = data.data;

  return { weather, units };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodaysWeather);
