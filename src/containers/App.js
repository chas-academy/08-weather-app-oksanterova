import React, { Component } from "react";
import Flex, { FlexItem } from "styled-flex-component";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import TodaysWeather from "./TodaysWeather";
import HourlyWeather from "./HourlyWeather";
import DailyWeather from "./DailyWeather";

import Loading from "../containers/Loading";

// calling the connect wrapper and the function created in the actions section
import { connect } from "react-redux";
import { defaultFunction } from "../actions";

class App extends Component {
  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {
    return (
      <Loading>
        <Header />
        <Flex justifyAround wrap>
          <FlexItem order="1">
            <CurrentWeather />
          </FlexItem>
          <FlexItem order="2">
            <TodaysWeather />
          </FlexItem>
        </Flex>
        <Flex column center>
        <FlexItem>
        <HourlyWeather />
        </FlexItem>
        <FlexItem>
        <DailyWeather />
        </FlexItem>
        </Flex>
      </Loading>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

// wrapping the component within the connect HOC and calling the default function directly
export default connect(
  mapStateToProps,
  { defaultFunction }
)(App);
