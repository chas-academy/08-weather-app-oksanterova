import DarkSkyApi from "dark-sky-api";

export const FETCH_DATA = "fetch_data";
export const FETCH_WEATHER = "fetch_weather";

// default function to display redux action format
export function defaultFunction() {
  let testVar = "Hello";

  // action object format being return to a reducer
  return {
    type: FETCH_DATA,
    payload: testVar
  };
}

export const REQUEST_WEATHER = "REQUEST_WEATHER";
function requestWeather(/* subreddit */) {
  return {
    type: REQUEST_WEATHER
  };
}

export const RECEIVE_WEATHER = "RECEIVE_WEATHER";
function receiveWeather(weather) {
  return {
    type: RECEIVE_WEATHER,
    weather,
    receivedAt: Date.now()
  };
}

export const TOGGLE_UNITS = "TOGGLE_UNITS";
export function toggleUnits(units) {
  return function(dispatch) {
    dispatch({
      type: TOGGLE_UNITS,
      units
    });

    return dispatch(fetchWeather(units));
  };
}

export function fetchWeather(units) {
  return function(dispatch) {
    dispatch(requestWeather());

    const api = new DarkSkyApi(
      "7f616e9d851c885325537e9b0db7bc55",
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7f616e9d851c885325537e9b0db7bc55/",
      units,
      "en"
    );

    return api
      .loadItAll()
      .then(weather => {
        weather.units = api.getResponseUnits();
        return dispatch(receiveWeather(weather));
      })
      .catch(console.log);
  };
}
