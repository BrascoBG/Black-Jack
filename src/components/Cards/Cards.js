import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import images from "./cardExport";
import { gsap } from "gsap";

const Cards = (props) => {
  const casinoCards = useSelector((state) => state.scoreReducer.casinoCards);
  const userCards = useSelector((state) => state.scoreReducer.userCards);

  useEffect(() => {
    gsap.from(`.user-card:last-child`, {
      rotation: 360,
      y: -500,
      duration: 0.5,
    });
    console.log("User");
  }, [props.show, userCards]);

  useEffect(() => {
    if (casinoCards.length > 2) {
      gsap.from(`.casino:last-child`, {
        rotation: 360,
        y: -500,
        duration: 0.5,
      });
      console.log("Casino");
    }
  }, [props.show, casinoCards]);

  return (
    <div>
      <h1>Casino: {props.casinoRes}</h1>
      {
        // eslint-disable-next-line array-callback-return
        casinoCards.map((card, index) => {
          for (const img of images) {
            if (card === img.id + 1) {
              return (
                <img
                  className="casino"
                  key={index}
                  alt={img.title}
                  src={img.src[0]}
                />
              );
            }
          }
        })
      }
      <hr />
      <h1>Player: {props.userRes}</h1>
      {
        // eslint-disable-next-line array-callback-return
        userCards.map((card, index) => {
          for (const img of images) {
            if (card === img.id + 1) {
              return (
                <img
                  className="user-card"
                  key={index}
                  alt={img.title}
                  src={img.src[0]}
                />
              );
            }
          }
        })
      }
    </div>
  );
};

export default Cards;
