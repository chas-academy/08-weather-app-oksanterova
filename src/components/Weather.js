import React from "react";
import styled from "styled-components";
import ReactSkycons from "react-skycons";

export const WeatherIconSpan = styled.span`
  display: block;
  width: 128px;
  height: 64px;
`;

export const CurrentWeatherSection = styled.section`
  display: block;
  background: rgb(80, 91, 105);
  color: #ebebeb;
  width: 100%;

  margin: 14px;
`;

export const CurrentConditionsBody = styled.div`
  padding: 14px;
  width: 100%;
  font-family: sans-serif;
  line-height: 1.3;
`;

export const CurrentConditionsHeader = styled.h1`
  color: #ebebeb;
  display: block;
  background-color: rgb(75, 85, 98);
  height: 50px;
  width: 100%;
  line-height: 50px;
  font-family: "Helvetica Neue", Helvetica, Arial;
  font-weight: 500;
  padding-left: 14px;
  padding-right: 14px;
  margin: 0;
`;

export const CurrentTime = styled.span`
  color: orange;
  padding-left: 5px;
  font-weight: 400;
  font-size: 20px;
`;

const StrongText = `
font-family: sans-serif;
font-weight: 500;
`;

export const WeatherSummary = styled.span`
  padding-left: 5px;
  color: rgb(114, 190, 218);	
`;

export const Temperature = styled.span`
  color: rgb(218, 115, 66);
  font-size: 2em;
  ${StrongText}

  ::after {
    content: "°";
  }
`;

export const WeatherIcon = ({ icon }) => {
  return (
    <WeatherIconSpan>
      <ReactSkycons
        color="#ebebeb"
        icon={icon.replace(/-/g, "_").toUpperCase()}
      />
    </WeatherIconSpan>
  );
};
