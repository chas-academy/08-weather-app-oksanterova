import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "../components/Loader";
import Flex, { FlexItem } from "styled-flex-component";
import {
  CurrentWeatherSection,
  CurrentConditionsHeader,
  CurrentConditionsBody,
  CurrentTime,
  WeatherIcon,
  Temperature,
  WeatherSummary
} from "../components/Weather.js";

export const CurrentWeather = ({ loading, data }) => {
  if (loading !== false) {
    return <Loader />;
  } else {
    console.log(data);
    return (
      <CurrentWeatherSection>
        <CurrentConditionsHeader>
          Current Conditions
          <CurrentTime>10:15 pm</CurrentTime>
        </CurrentConditionsHeader>
        <CurrentConditionsBody>
          <Flex full>
            <FlexItem order="1">
              <WeatherIcon icon={data.icon} />
            </FlexItem>
            <FlexItem order="2">
              <Temperature>{data.temperature}</Temperature>
              <WeatherSummary>{data.summary}</WeatherSummary>
              <div> Humidity: {data.humidity} % </div>
              <div>Wind: {data.windSpeed} km/h </div>
              <div> Humidity: {data.humidity} % </div>
              <div> Humidity: {data.humidity} % </div>
              <div> Humidity: {data.humidity} % </div>
            </FlexItem>
          </Flex>{" "}
        </CurrentConditionsBody>
      </CurrentWeatherSection>
    );
  }
};

CurrentWeather.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.shape({
    icon: PropTypes.string,
    summary: PropTypes.string,
    temperature: PropTypes.number
  })
};

const mapStateToProps = state => {
  const loading = state.weather === undefined || state.weather.loading;
  const data = (state.weather.data || {}).currently;

  return { loading: loading, data: data };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeather);
