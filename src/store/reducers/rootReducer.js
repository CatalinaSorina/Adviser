import * as types from "../actions/types";

let initialState = {
  fetching: false,
  advice: "",
  error: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_ADVICE:
      return {
        ...initialState,
        fetching: true
      };
    case types.RECEIVED_ADVICE:
      return {
        fetching: false,
        advice: action.payload,
        error: false
      };
    case types.ERROR_RECEIVE_ADVICE:
      return {
        fetching: false,
        advice: "",
        error: action.payload
      };
    default:
      return initialState;
  }
};

export default rootReducer;
