import React from "react";
import styles from "./Buttons.module.scss";
import GitHub from "../../assets/images/git.png";
import Home from "../../assets/images/home.png";
import { NavLink } from "react-router-dom";

const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <NavLink to="/Black-Jack-Live">
        <img className={styles.Home} src={Home} alt="Home" />
      </NavLink>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/BrascoBG/Black-Jack"
      >
        <img className={styles.Git} src={GitHub} alt="Git" />
      </a>
    </div>
  );
};

export default Buttons;
