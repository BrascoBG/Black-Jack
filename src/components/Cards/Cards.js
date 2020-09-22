import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import images from "./cardExport";
import styles from "./Cards.module.scss";
import { gsap } from "gsap";

const Cards = (props) => {
  const casinoCards = useSelector((state) => state.scoreReducer.casinoCards);
  const userCards = useSelector((state) => state.scoreReducer.userCards);
  let casinoElement = useRef(null);

  useEffect(() => {
    gsap.to(".user-card", {
      y: "0px",
      opacity: 1,
      rotation: 180,
      duration: 0.5,
    });
  }, [props.show, userCards]);

  useEffect(() => {
    gsap.to(casinoElement, {
      y: "0px",
      rotation: 180 + "random(-10, 10)",
      opacity: 1,
      duration: 0.5,
    });
  }, [props.show, casinoCards]);

  useEffect(() => {
    gsap.fromTo(
      ".player",
      {
        scale: 2,
      },
      {
        scale: 1,
        duration: 1,
      }
    );
  }, [props.userRes]);

  useEffect(() => {
    gsap.fromTo(
      ".casino",
      {
        scale: 2,
      },
      {
        scale: 1,
        duration: 1,
      }
    );
  }, [props.casinoRes]);

  return (
    <div className={styles.cards}>
      <h3 className="casino">Casino: {props.casinoRes}</h3>
      <div style={{ marginRight: "50px" }}>
        {
          // eslint-disable-next-line array-callback-return
          casinoCards.map((card, index) => {
            for (const img of images) {
              if (card === img.id + 1) {
                return (
                  <img
                    // eslint-disable-next-line no-loop-func
                    ref={(el) => {
                      casinoElement = el;
                    }}
                    className="casino-card"
                    key={index}
                    alt={img.title}
                    src={img.src[0]}
                    style={{
                      transform: "translateY(-100px) rotate(0deg)",
                      opacity: 0,
                      marginRight: "-50px",
                    }}
                  />
                );
              }
            }
          })
        }
      </div>
      <hr />
      <h3 className="player">Player: {props.userRes}</h3>
      <div style={{ marginRight: "50px" }}>
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
                    style={{
                      transform: "translateY(-300px)",
                      marginRight: "-50px",
                    }}
                  />
                );
              }
            }
          })
        }
      </div>
    </div>
  );
};

export default Cards;
