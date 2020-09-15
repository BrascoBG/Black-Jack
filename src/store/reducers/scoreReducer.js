import * as actionTypes from "../actions";

const initialState = {
  casino: [],
  user: [],
};

const score = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CASINO_CARD:
      return {
        ...state,
        casino: state.casino.concat(action.card),
      };
    default:
      return state;
  }
};

export default score;
