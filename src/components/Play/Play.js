import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/actions";
import styles from "./Play.module.scss";
import Cards from "../Cards/Cards";

const Play = () => {
  const money = useSelector((state) => state.moneyReducer.money);
  const casinoCards = useSelector((state) => state.scoreReducer.casinoCards);
  const userCards = useSelector((state) => state.scoreReducer.userCards);
  const casinoResult = useSelector((state) => state.scoreReducer.casinoResult);
  const userResult = useSelector((state) => state.scoreReducer.userResult);
  const showApp = useSelector((state) => state.showReducer.showApp);
  const dispatch = useDispatch();

  const hit = () => {
    let randomCard = Math.floor(Math.random() * 10) + 2;
    if (userResult > 10 && randomCard === 11) {
      randomCard = 1;
    }
    dispatch({
      type: actionTypes.USER_CARD,
      card: randomCard,
    });
  };

  const stand = () => {
    let randomCard = Math.floor(Math.random() * 10) + 2;
    if (casinoResult > 10 && randomCard === 11) {
      randomCard = 1;
    }
    dispatch({
      type: actionTypes.CASINO_CARD,
      card: randomCard,
    });
  };

  useEffect(() => {
    if (userResult === 21 && showApp === true && userCards.length === 2) {
      dispatch({
        type: actionTypes.MESSAGE_WIN,
        resMessage: "Black Jack!",
      });
    }
    // eslint-disable-next-line
  }, [showApp]);

  useEffect(() => {
    if (
      casinoCards.length > 1 &&
      casinoResult < userResult &&
      casinoResult < 21
    ) {
      setTimeout(() => {
        stand();
      }, 1000);
    }
    if (casinoResult === userResult && casinoCards.length > 1) {
      dispatch({
        type: actionTypes.MESSAGE_DRAW,
        resMessage: "DRAW!",
      });
    }
    if (
      casinoResult > userResult &&
      casinoResult <= 21 &&
      casinoCards.length > 1
    ) {
      dispatch({
        type: actionTypes.MESSAGE_LOST,
        resMessage: "You Lost!",
      });
    }
    if (casinoResult > 21) {
      dispatch({
        type: actionTypes.MESSAGE_WIN,
        resMessage: "You Win!",
      });
    }
    if (userResult > 21) {
      dispatch({
        type: actionTypes.MESSAGE_LOST,
        resMessage: "You Lost!",
      });
    }
    // eslint-disable-next-line
  }, [casinoCards, userResult]);

  return (
    <div>
      <div className={!showApp ? styles.money : styles.moneysecond}>
        <h3>My Money</h3>
        <h1 className={styles.player}>${money}</h1>
      </div>
      <div style={showApp ? { display: "block" } : { display: "none" }}>
        <div className={styles.buttons}>
          <button
            style={{ visibility: casinoCards.length > 1 && "hidden" }}
            onClick={stand}
          >
            STAND
          </button>
          <Cards casinoRes={casinoResult} userRes={userResult} show={showApp} />
          <button
            style={{ visibility: casinoCards.length > 1 && "hidden" }}
            onClick={hit}
          >
            HIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Play;
