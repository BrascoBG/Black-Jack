import * as actionTypes from "../actions";

const initialState = {
  money: 2000,
};

const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BET_PLACED_WIN:
      return {
        ...state,
        money: state.money + action.bet,
      };
    case actionTypes.BET_PLACED_LOST:
      return {
        ...state,
        money: state.money - action.bet,
      };
    default:
      return state;
  }
};

export default moneyReducer;
