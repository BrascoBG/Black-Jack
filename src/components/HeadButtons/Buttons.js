import React from "react";
import styles from "./Buttons.module.scss";
import GitHub from "../../assets/images/git.png";
import Home from "../../assets/images/home.png";
import { NavLink } from "react-router-dom";

const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <NavLink to="/">
        <img style={{ width: "25%" }} src={Home} alt="Home" />
      </NavLink>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/BrascoBG/Black-Jack"
      >
        <img style={{ width: "40%" }} src={GitHub} alt="Git" />
      </a>
    </div>
  );
};

export default Buttons;
