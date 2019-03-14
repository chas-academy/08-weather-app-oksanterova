import React from "react";
import styled from "styled-components";
import ReactSkycons from "react-skycons";

export const AppHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(80, 91, 105);
  color: #ebebeb;
  height: 60px;
  padding: 0 14px 0 14px;
  font-size: 1.3em;
`;

export const Position = styled.span`
  color: rgb(114, 190, 218);
`;

export const ToggleUnit = styled.button`
  display: block;
  width: 160px;
  height: 40px;
  color: rgb(114, 190, 218);
`;

export const WeatherIconSpan = styled.span`
  display: block;
  width: 128px;
  height: 64px;
`;

export const WeatherSection = styled.section`
  display: block;
  background-color: rgb(80, 91, 105);
  color: #ebebeb;
  margin: 14px;
`;

export const WeatherSectionBody = styled.div`
  padding: 14px;
  font-family: sans-serif;
  font-weight: 300;
  line-height: 1.5;
  height: 260px;
`;

export const WeatherSectionHeader = styled.div`
  color: #ebebeb;
  background-color: rgb(75, 85, 98);
  height: 50px;
  width: 525px;
  line-height: 50px;
  font-family: "Helvetica Neue", Helvetica, Arial;
  font-weight: 500;
  padding-left: 28px;
  margin: 0;
`;

export const WeatherSectionHeader2 = styled.div`
  color: #ebebeb;

  background-color: rgb(75, 85, 98);
  height: 50px;
  width: 525px;
  line-height: 50px;
  font-family: "Helvetica Neue", Helvetica, Arial;
  font-weight: 500;
  padding: 0 14px 0 14px;
  margin: 0;
`;

export const HourlyWeatherIconSpan = styled(WeatherIconSpan)`
  display: block;
  width: 65px;
  height: 32px;
`;

export const HourWeatherSectionBody = styled(WeatherSectionBody)`
  width: 200px;
  height: 80px;
`;

export const HourWeatherSectionHeader = styled(WeatherSectionHeader)`
  width: 200px;
  padding: 0 14px 0 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DailySectionHeader = styled(WeatherSectionHeader)`
  width: 300px;
`;

export const DailySectionBody = styled(WeatherSectionBody)`
  width: 300px;
`;

export const DailyWeatherIconSpan = styled(WeatherIconSpan)`
  display: block;
  width: 80px;
  height: 40px;
`;

export const SectionHeader = styled.div`
  color: #ebebeb;
  display: block;
  height: 50px;
  line-height: 50px;
  font-weight: 400;
  font-size: 22px;
  font-family: "Helvetica Neue", Helvetica, Arial;
  padding-left: 14px;
  margin: 0;
`;

export const Time = styled.span`
  color: orange;
  padding-left: 7px;
  font-weight: 400;
  font-size: 20px;
`;

export const Days = styled(Time)`
  font-weight: 500;
  font-size: 18px;
`;

export const Hours = styled(Days)`
  color: #ebebeb;
  font-weight: 300;
  font-size: 18px;
`;

const StrongText = `
  font-family: sans-serif;
  font-weight: 500;
`;

export const WeatherSummary = styled.span`
  font-size: 1em
  font-weight: 600;
  font-style: italic;
`;

export const DailySummary = styled(WeatherSummary)`
  color: rgb(114, 190, 218);
  padding-left: 10px;
`;

export const HourlySummary = styled(WeatherSummary)`
  font-weight: 600;
`;

export const TemperatureSpan = styled.span`
  color: rgb(218, 115, 66);
  font-size: 2em;
  ${StrongText}
`;

const SecondaryTemperatureSpan = styled(TemperatureSpan)`
  font-size: 1.7em;
`;

const TemperatureMinSpan = styled(TemperatureSpan)`
  color: rgb(114, 190, 218);
  font-size: 1.7em;
  padding-left: 10px;
`;

function formatTemperature(temperature, unit) {
  const pretty = Math.round(temperature)
    .toString()
    .replace(/-/, "\u2212");

  return `${pretty}°${unit.toUpperCase()}`;
}

export const Temperature = ({ temperature, unit }) => (
  <TemperatureSpan>{formatTemperature(temperature, unit)}</TemperatureSpan>
);

export const SecondaryTemperature = ({ temperature, unit }) => (
  <SecondaryTemperatureSpan>
    {formatTemperature(temperature, unit)}
  </SecondaryTemperatureSpan>
);

export const TemperatureMin = ({ temperature, unit }) => (
  <TemperatureMinSpan>
    {formatTemperature(temperature, unit)}
  </TemperatureMinSpan>
);

export const CurrentWeatherIcon = ({ icon }) => {
  return (
    <WeatherIconSpan>
      <ReactSkycons
        color="#ebebeb"
        icon={icon.replace(/-/g, "_").toUpperCase()}
      />
    </WeatherIconSpan>
  );
};

export const HourlyWeatherIcon = ({ icon }) => {
  return (
    <HourlyWeatherIconSpan>
      <ReactSkycons
        color="#ebebeb"
        icon={icon.replace(/-/g, "_").toUpperCase()}
      />
    </HourlyWeatherIconSpan>
  );
};

export const DailyWeatherIcon = ({ icon }) => {
  return (
    <DailyWeatherIconSpan>
      <ReactSkycons
        color="#ebebeb"
        icon={icon.replace(/-/g, "_").toUpperCase()}
      />
    </DailyWeatherIconSpan>
  );
};
