import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import moneyReducer from "./store/reducers/moneyReducer";
import scoreReducer from "./store/reducers/scoreReducer";
import messageReducer from "./store/reducers/messageReducer";
import showReducer from "./store/reducers/showReducer";

const rootReducers = combineReducers({
  moneyReducer: moneyReducer,
  scoreReducer: scoreReducer,
  messageReducer: messageReducer,
  showReducer: showReducer,
});

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
