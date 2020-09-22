import React, { useEffect } from "react";
import BJ from "../../assets/images/bj.png";
import styles from "./Intro.module.scss";
import { NavLink } from "react-router-dom";
import { gsap, TweenLite, Elastic } from "gsap";

const Intro = () => {
  useEffect(() => {
    TweenLite.from(`.${styles.rela}`, 2, {
      delay: 0.3,
      y: -100,
      ease: Elastic.easeOut,
    });
    gsap.fromTo(
      ".btn-anime",
      {
        duration: 3,
        delay: 0.3,
        opacity: 0,
      },
      {
        duration: 3,
        opacity: 1,
        delay: 0.3,
      }
    );
  }, []);

  return (
    <div className={styles.Intro}>
      <div className={styles.rela}>
        <img src={BJ} alt="logo" />
        <div className={styles.Jack}>
          <h3>Ivo's</h3>
          <h1>Black Jack</h1>
        </div>
      </div>
      <div className="btn-anime">
        <NavLink to="/play">
          <button className={styles.button}>RULES</button>
        </NavLink>
        <NavLink to="/play">
          <button className={styles.Play}>PLAY</button>
        </NavLink>
        <NavLink to="/play">
          <button className={styles.button}>ABOUT</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Intro;
