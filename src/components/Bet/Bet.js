import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/actions";
import Modal from "../Modal/Modal";

const Bet = () => {
  const [myBet, setMyBet] = useState(0);
  const [modalMessage, setModalMessage] = useState(false);
  const message = useSelector((state) => state.messageReducer.message);
  const showApp = useSelector((state) => state.showReducer.showApp);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message === "You Lost!") {
      dispatch({
        type: actionTypes.BET_PLACED_LOST,
        bet: myBet,
      });
      setTimeout(() => {
        setModalMessage(true);
      }, 600);
    }
    if (message === "You Win!") {
      dispatch({
        type: actionTypes.BET_PLACED_WIN,
        bet: myBet,
      });
      setTimeout(() => {
        setModalMessage(true);
      }, 600);
    }
    if (message === "DRAW!") {
      setTimeout(() => {
        setModalMessage(true);
      }, 600);
    }
    // eslint-disable-next-line
  }, [message]);

  const resetHandler = () => {
    dispatch({
      type: actionTypes.RESET_MESSAGE,
    });
    dispatch({
      type: actionTypes.RESET_CARDS,
    });
    dispatch({
      type: actionTypes.SHOW_APP_TOGGLE,
    });
    setMyBet(0);
    setModalMessage(false);
  };

  return (
    <div>
      <Modal status={modalMessage}>
        <h3>{message}</h3>
        <button onClick={resetHandler}>OK</button>
      </Modal>
      <div style={showApp ? { display: "none" } : { display: "block" }}>
        <button onClick={() => setMyBet((prevState) => prevState + 5)}>
          5
        </button>
        <button onClick={() => setMyBet((prevState) => prevState + 25)}>
          25
        </button>
        <button onClick={() => setMyBet((prevState) => prevState + 50)}>
          50
        </button>
        <button onClick={() => setMyBet((prevState) => prevState + 75)}>
          75
        </button>
        <button onClick={() => setMyBet((prevState) => prevState + 100)}>
          100
        </button>
        <button
          disabled={myBet === 0}
          onClick={() => dispatch({ type: actionTypes.SHOW_APP_TOGGLE })}
        >
          DEAL
        </button>
      </div>
      <h4>My Bet: ${myBet}</h4>
    </div>
  );
};

export default Bet;
