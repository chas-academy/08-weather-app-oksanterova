import React from "react";
import { connect } from "react-redux";
import { AppHeader, Position, ToggleUnit } from "../components/Weather";
import { toggleUnits } from "../actions/index";

export const Header = ({ weather, units, toggleUnits }) => {
  return (
    <AppHeader>
      Weather Forecast in <Position>{weather.timezone}</Position>{" "}
      <ToggleUnit
        onClick={() => toggleUnits(units === "si" ? "us" : "si")}
        style={{ fontSize: "0.8em", fontWeight: "600" }}
      >
        Change Units ({units})
      </ToggleUnit>
    </AppHeader>
  );
};

const mapStateToProps = state => {
  const weather = state.weather.data || {};
  const units = state.weather.units;

  return { weather, units };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleUnits: units => dispatch(toggleUnits(units))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
