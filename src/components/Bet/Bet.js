import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/actions";
import Modal from "../Modal/Modal";
import styles from "./Bet.module.scss";
import { gsap } from "gsap";

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
    if (message === "You Win!" || message === "You Win! BLACK JACK!") {
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

  useEffect(() => {
    gsap.from(".demo", {
      opacity: 0,
      y: 100,
      duration: 1,
    });
  }, []);

  return (
    <div>
      <Modal status={modalMessage}>
        <h3>{message}</h3>
        <button onClick={resetHandler}>OK</button>
      </Modal>
      <div
        className="demo"
        style={showApp ? { display: "none" } : { display: "block" }}
      >
        <div
          onClick={() => setMyBet((prevState) => prevState + 5)}
          className={`${styles.pokerchip} ${styles.iso}`}
        >
          <span className={styles.money}>$5</span>
        </div>
        <div
          onClick={() => setMyBet((prevState) => prevState + 25)}
          className={`${styles.pokerchip} ${styles.iso} ${styles.red}`}
        >
          <span className={styles.money}>$25</span>
        </div>
        <div
          onClick={() => setMyBet((prevState) => prevState + 50)}
          className={`${styles.pokerchip} ${styles.iso} ${styles.blue}`}
        >
          <span className={styles.money}>$50</span>
        </div>
        <div
          onClick={() => setMyBet((prevState) => prevState + 75)}
          className={`${styles.pokerchip} ${styles.iso} ${styles.green}`}
        >
          <span className={styles.money}>$75</span>
        </div>
        <div
          onClick={() => setMyBet((prevState) => prevState + 100)}
          className={`${styles.pokerchip} ${styles.iso} ${styles.black}`}
        >
          <span className={styles.money}>$100</span>
        </div>

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
