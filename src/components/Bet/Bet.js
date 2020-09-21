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
    gsap.from(`.${styles.wrap}`, {
      opacity: 0,
      duration: 2,
    });
    gsap.to(`.${styles.place}`, {
      duration: 1,
      y: "100%",
      stagger: 0.3,
    });
  }, [showApp]);

  const makeBet = (bet) => {
    setMyBet((prevState) => prevState + bet);
  };

  useEffect(() => {
    gsap.fromTo(
      `.${styles.mybet}`,
      {
        rotateX: 0,
        scaleY: 2,
        duration: 1,
      },
      {
        rotateX: 360,
        scaleY: 1,
      }
    );
  }, [myBet]);

  return (
    <div>
      <Modal status={modalMessage}>
        <h3>{message}</h3>
        <button onClick={resetHandler}>OK</button>
      </Modal>
      <div
        className={styles.wrap}
        style={showApp ? { display: "none" } : { display: "block" }}
      >
        <h2 className={styles.place}>Click on the chips and</h2>
        <h2 id={styles.space} className={styles.place}>
          Place Your Bet!
        </h2>
        <div
          onClick={() => makeBet(5)}
          className={`${styles.pokerchip} ${styles.iso}`}
        >
          <span className={styles.money}>$5</span>
        </div>
        <div
          onClick={() => makeBet(25)}
          className={`${styles.pokerchip} ${styles.iso} ${styles.red}`}
        >
          <span className={styles.money}>$25</span>
        </div>
        <div
          onClick={() => makeBet(50)}
          className={`${styles.pokerchip} ${styles.iso} ${styles.blue}`}
        >
          <span className={styles.money}>$50</span>
        </div>
        <div
          onClick={() => makeBet(75)}
          className={`${styles.pokerchip} ${styles.iso} ${styles.green}`}
        >
          <span className={styles.money}>$75</span>
        </div>
        <div
          onClick={() => makeBet(100)}
          className={`${styles.pokerchip} ${styles.iso} ${styles.black}`}
        >
          <span className={styles.money}>$100</span>
        </div>
      </div>
      <div style={showApp ? { display: "none" } : { display: "block" }}>
        <button
          className={styles.deal}
          onClick={() => dispatch({ type: actionTypes.SHOW_APP_TOGGLE })}
          style={{ visibility: myBet === 0 && "hidden" }}
        >
          DEAL
        </button>
      </div>

      <div className={!showApp ? styles.bet : styles.betsecond}>
        <h3>My Bet</h3>
        <h1 className={styles.mybet}>${myBet}</h1>
      </div>
    </div>
  );
};

export default Bet;
