import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.status} />
      <div
        className={styles.Modal}
        style={{
          transform: props.status ? "translateY(0)" : "translateY(-100vh)",
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};
export default Modal;
