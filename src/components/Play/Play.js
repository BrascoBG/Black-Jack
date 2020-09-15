import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/actions";

const Play = () => {
  const money = useSelector((state) => state.moneyReducer.money);
  const casinoCards = useSelector((state) => state.scoreReducer.casino);
  const dispatch = useDispatch();
  let card = Math.floor(Math.random() * 10) + 2;
  const [arr, setArr] = useState([]);

  const demo = () => {
    dispatch({
      type: actionTypes.INCREASE_MONEY,
    });
    setArr([...arr, card]);
  };

  const demoTest = () => {
    dispatch({
      type: actionTypes.CASINO_CARD,
      card: card,
    });
  };

  useEffect(() => {
    let sum;
    if (arr.length > 0) {
      sum = arr.reduce((a, b) => a + b);
    }
    console.log(arr);
    if (sum > 21) {
      alert("Game over");
    }
    console.log(sum);
  }, [arr]);

  return (
    <div>
      <h1>{money}</h1>
      <h2>{card}</h2>

      <button onClick={demo}>+</button>
      <button onClick={demoTest}>-</button>
      <h2>
        {casinoCards.map((card) => (
          <p>{card}</p>
        ))}
      </h2>
    </div>
  );
};

export default Play;
