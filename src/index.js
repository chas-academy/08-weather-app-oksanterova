import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { fetchWeather } from "./actions";
import rootReducer from "./reducers";
import { createGlobalStyle } from "styled-components";

const loggerMiddleware = createLogger();

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: rgb(47, 61, 78);
    width: 100vw;
    height: 100vh;
  }
`;

// creating a store for the redux structure
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware 
  )
);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(fetchWeather()).then(() => console.log(store.getState()));
