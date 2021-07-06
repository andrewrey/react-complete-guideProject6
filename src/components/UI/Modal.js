import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const Modal = ({ children, onClick }) => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={onClick} />,
        document.querySelector("#overlays")
      )}
      {createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.querySelector("#overlays")
      )}
    </>
  );
};

export default Modal;
