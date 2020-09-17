import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/actions";

const Play = () => {
  const money = useSelector((state) => state.moneyReducer.money);
  const casinoCards = useSelector((state) => state.scoreReducer.casinoCards);
  const userCards = useSelector((state) => state.scoreReducer.userCards);
  const casinoResult = useSelector((state) => state.scoreReducer.casinoResult);
  const userResult = useSelector((state) => state.scoreReducer.userResult);
  const showApp = useSelector((state) => state.showReducer.showApp);
  const dispatch = useDispatch();

  const hit = () => {
    dispatch({
      type: actionTypes.USER_CARD,
      card: Math.floor(Math.random() * 10) + 2,
    });
  };

  const stand = () => {
    dispatch({
      type: actionTypes.CASINO_CARD,
      card: Math.floor(Math.random() * 10) + 2,
    });
  };

  useEffect(() => {
    if (userResult === 21 && showApp === true && userCards.length === 2) {
      dispatch({
        type: actionTypes.MESSAGE_WIN,
        resMessage: "You Win! BLACK JACK!",
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
      <h1>My Money: ${money}</h1>
      <div style={showApp ? { display: "block" } : { display: "none" }}>
        <button onClick={hit}>HIT</button>
        <button onClick={stand}>STAND</button>
        <h1>Casino: {casinoResult}</h1>
        <h2>
          {casinoCards.map((card, index) => (
            <p key={index}>{card}</p>
          ))}
        </h2>
        <hr />
        <h1>User: {userResult}</h1>
        <h2>
          {userCards.map((card, index) => (
            <p key={index}>{card}</p>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default Play;
