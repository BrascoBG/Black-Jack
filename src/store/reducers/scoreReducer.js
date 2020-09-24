import * as actionTypes from "../actions";

const casinoCard = Math.floor(Math.random() * 10) + 2;
let userCard1 = Math.floor(Math.random() * 10) + 2;
let userCard2 = Math.floor(Math.random() * 10) + 2;

if (userCard1 === 11 && userCard2 === 11) {
  userCard2 = Math.floor(Math.random() * 9) + 2;
}

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
      let resUserCard1 = Math.floor(Math.random() * 10) + 2;
      let resUserCard2 = Math.floor(Math.random() * 10) + 2;
      if (resUserCard1 === 11 && resUserCard2 === 11) {
        resUserCard2 = Math.floor(Math.random() * 9) + 2;
      }
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
