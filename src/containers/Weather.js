import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "../components/Loader";
import ReactSkycons from "react-skycons";

const WeatherIcon = styled.span`
  display: block;
  width: 128px;
  height: 64px;
`;

export const Weather = ({ loading, data }) => {
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <h1>Current Condition</h1>

        <WeatherIcon>
          <ReactSkycons icon={data.icon.toUpperCase()} />
        </WeatherIcon>

        <span className={data.icon} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { loading: true, ...state.weather };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
