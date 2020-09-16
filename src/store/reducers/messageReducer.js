import * as actionTypes from "../actions";

const initialState = {
  message: "",
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MESSAGE_WIN:
      return {
        ...state,
        message: action.resMessage,
      };
    case actionTypes.MESSAGE_LOST:
      return {
        ...state,
        message: action.resMessage,
      };
    case actionTypes.MESSAGE_DRAW:
      return {
        ...state,
        message: action.resMessage,
      };
    default:
      return state;
  }
};

export default messageReducer;
