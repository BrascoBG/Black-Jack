import * as actionTypes from "../actions";

const initialState = {
  money: 2000,
};

const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_MONEY:
      return {
        ...state,
        money: state.money + 20,
      };
    case actionTypes.DECREASE_MONEY:
      return {
        ...state,
        money: state.money - 20,
      };
    default:
      return state;
  }
};

export default moneyReducer;
