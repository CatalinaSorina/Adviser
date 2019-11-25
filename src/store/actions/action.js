import * as types from "./types";
import axios from "axios";

export const fetchAdvice = () => {
  return {
    type: types.FETCHING_ADVICE
  };
};

export const receivedAdvice = advice => {
  return {
    type: types.RECEIVED_ADVICE,
    payload: advice
  };
};

export const errorReceivingAdvice = errorMessage => {
  return {
    type: types.ERROR_RECEIVE_ADVICE,
    payload: errorMessage
  };
};

export const getAdvice = () => async dispatch => {
  try {
    dispatch(fetchAdvice());
    const { data } = await axios.get("https://api.adviceslip.com/advice");
    dispatch(receivedAdvice(data.advice));
  } catch (error) {
    dispatch(errorReceivingAdvice(error.message));
  }
};
