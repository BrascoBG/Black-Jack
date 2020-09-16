import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/actions";

const Bet = () => {
  const [myBet, setMyBet] = useState(0);
  const message = useSelector((state) => state.messageReducer.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message === "You Lost!") {
      dispatch({
        type: actionTypes.BET_PLACED_LOST,
        bet: myBet,
      });
      alert(message);
    }
    if (message === "You Win!") {
      dispatch({
        type: actionTypes.BET_PLACED_WIN,
        bet: myBet,
      });
      alert(message);
    }
    if (message === "DRAW!") {
      alert(message);
    }
  }, [message]);

  return (
    <div>
      <button onClick={() => setMyBet((prevState) => prevState + 5)}>5</button>
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
      <h4>My Bet: {myBet}</h4>
    </div>
  );
};

export default Bet;
