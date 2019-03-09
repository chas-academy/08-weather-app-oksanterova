// default reducer
// Note: You can remove this reducer and create your own reducer

import { RECEIVE_WEATHER, REQUEST_WEATHER } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return { ...state, loading: true, data: null };
    case RECEIVE_WEATHER:
      return { ...state, loading: false, data: action.weather };
    default:
      return state;
  }
};
