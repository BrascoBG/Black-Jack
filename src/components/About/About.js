import React, { useEffect } from "react";
import AboutImg from "../../assets/images/about2.png";
import styles from "./About.module.scss";
import { gsap, TweenLite, Elastic } from "gsap";
import { NavLink } from "react-router-dom";

const About = () => {
  useEffect(() => {
    TweenLite.from(`.${styles.image}`, 2, {
      delay: 0.5,
      y: -250,
      ease: Elastic.easeOut,
    });
    gsap.fromTo(
      `.${styles.Info}`,
      {
        x: -300,
        opacity: 0,
        duration: 1,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} alt="logo" src={AboutImg} />
      <div className={styles.Info}>
        <h2>
          ReactJS SPA, built with ReactJS, Redux, React Hooks, React Router,
          GSAP Animations, CSS/SASS, FlexBox.
        </h2>
        <a
          href="https://github.com/BrascoBG/Black-Jack"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to see the code
        </a>
        <br />
        <NavLink to="/Black-Jack-Live">
          <button>&larr; BACK</button>
        </NavLink>
      </div>
    </div>
  );
};

export default About;
