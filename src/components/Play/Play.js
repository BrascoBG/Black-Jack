import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/actions";

const Play = () => {
  const money = useSelector((state) => state.moneyReducer.money);
  const casinoCards = useSelector((state) => state.scoreReducer.casinoCards);
  const userCards = useSelector((state) => state.scoreReducer.userCards);
  const casinoResult = useSelector((state) => state.scoreReducer.casinoResult);
  const userResult = useSelector((state) => state.scoreReducer.userResult);
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
    console.log("heey");
  }, []);

  return (
    <div>
      <h1>{money}</h1>
      <button onClick={hit}>HIT</button>
      <button onClick={stand}>STAND</button>
      <h1>Casino: {casinoResult < 21 ? casinoResult : "You Win!"}</h1>
      <h2>
        {casinoCards.map((card) => (
          <p>{card}</p>
        ))}
      </h2>
      <hr />
      <h1>User: {userResult < 21 ? userResult : "You Lost"}</h1>
      <h2>
        {userCards.map((card) => (
          <p>{card}</p>
        ))}
      </h2>
    </div>
  );
};

export default Play;
