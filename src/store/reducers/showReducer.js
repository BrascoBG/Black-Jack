import * as actionTypes from "../actions";

const initialState = {
  showApp: false,
};

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_APP_TOGGLE:
      return {
        ...state,
        showApp: !state.showApp,
      };
    default:
      return state;
  }
};

export default showReducer;
