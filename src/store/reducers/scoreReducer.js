import * as actionTypes from "../actions";

const casinoCard = Math.floor(Math.random() * 10) + 2;
const userCard1 = Math.floor(Math.random() * 10) + 2;
const userCard2 = Math.floor(Math.random() * 10) + 2;

const initialState = {
  casinoCards: [casinoCard],
  casinoResult: casinoCard,
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
    case actionTypes.RESET_CARDS:
      const resCasinoCard = Math.floor(Math.random() * 10) + 2;
      const resUserCard1 = Math.floor(Math.random() * 10) + 2;
      const resUserCard2 = Math.floor(Math.random() * 10) + 2;
      return {
        casinoCards: [resCasinoCard],
        casinoResult: resCasinoCard,
        userCards: [resUserCard1, resUserCard2],
        userResult: resUserCard1 + resUserCard2,
      };
    default:
      return state;
  }
};

export default scoreReducer;
