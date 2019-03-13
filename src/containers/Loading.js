import React from "react";
import { connect } from "react-redux";
import Loader from "../components/Loader";

const Loading = ({ children, loading }) => {
  if (loading !== false) {
    return <Loader />;
  } else {
    return <div>{children}</div>;
  }
};

const mapStateToProps = state => {
  return { loading: state.weather.loading };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
