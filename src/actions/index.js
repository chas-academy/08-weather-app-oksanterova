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
    // TODO subreddit
  };
}

export const RECEIVE_WEATHER = "RECEIVE_WEATHER";
function receiveWeather(/*subreddit, */ weather) {
  return {
    type: RECEIVE_WEATHER,
    weather,
    receivedAt: Date.now()
  };
}

export function fetchWeather() {
  return function(dispatch) {
    dispatch(requestWeather());

    DarkSkyApi.apiKey = "7f616e9d851c885325537e9b0db7bc55";
    DarkSkyApi.proxy =
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7f616e9d851c885325537e9b0db7bc55/";

    return DarkSkyApi.loadCurrent()
      .then(weather => dispatch(receiveWeather(weather)))
      .catch(console.log);
  };
}
