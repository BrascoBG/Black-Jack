import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.scss";
import modalImg from "../../assets/images/modal.png";

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
        <img src={modalImg} alt="cards" />
        {props.children}
      </div>
    </React.Fragment>
  );
};
export default Modal;
