import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import images from "./cardExport";

const Cards = (props) => {
  const casinoCards = useSelector((state) => state.scoreReducer.casinoCards);
  const userCards = useSelector((state) => state.scoreReducer.userCards);
  // const [cardImagesFour] = useState(Math.floor(Math.random() * 3));
  // const [cardImagesSixteen] = useState(Math.floor(Math.random() * 15));

  return (
    <div>
      <h1>Casino: {props.casinoRes}</h1>
      {casinoCards.map((card, index) => {
        for (const img of images) {
          if (card === img.id + 1) {
            return <img key={index} alt={img.title} src={img.src[0]} />;
          }
        }
      })}
      <hr />
      <h1>Player: {props.userRes}</h1>
      {userCards.map((card, index) => {
        for (const img of images) {
          if (card === img.id + 1) {
            return <img key={index} alt={img.title} src={img.src[0]} />;
          }
        }
      })}
    </div>
  );
};

export default Cards;
