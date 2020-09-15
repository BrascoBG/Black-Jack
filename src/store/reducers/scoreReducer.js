import * as actionTypes from "../actions";

const casinoCard1 = Math.floor(Math.random() * 10) + 2;
//const casinoCard2 = Math.floor(Math.random() * 10) + 2;
const userCard1 = Math.floor(Math.random() * 10) + 2;
const userCard2 = Math.floor(Math.random() * 10) + 2;

const initialState = {
  casinoCards: [casinoCard1],
  casinoResult: casinoCard1,
  userCards: [userCard1, userCard2],
  userResult: userCard1 + userCard2,
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CASINO_CARD:
      return {
        ...state,
        casinoCards: state.casinoCards.concat(action.card),
        casinoResult: state.casinoResult + action.card,
      };
    case actionTypes.USER_CARD:
      return {
        ...state,
        userCards: state.userCards.concat(action.card),
        userResult: state.userResult + action.card,
      };
    default:
      return state;
  }
};

export default scoreReducer;
