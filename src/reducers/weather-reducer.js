import { RECEIVE_WEATHER, REQUEST_WEATHER, TOGGLE_UNITS } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return { ...state, loading: true, data: null };
    case RECEIVE_WEATHER:
      return { ...state, loading: false, data: action.weather };
    case TOGGLE_UNITS:
      return { ...state, units: action.units };
    default:
      return state;
  }
};
