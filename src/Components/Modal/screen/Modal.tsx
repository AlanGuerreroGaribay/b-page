import { ReactNode } from "react";
import Button from "../../Buttons/Button";
import cancel from "../../../assets/Modal/cancel-svgrepo-com 1.svg";
import "../styles/Modal.css";

type ModalType = {
  children: ReactNode;
  buttonText?: string;
  title: string;
  handler?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const Modal = ({ children, title, buttonText, handler }: ModalType) => {
  return (
    <div className="modal-screen">
      <div className="modal-container-show">
        <div className="modal-button-container">
          <div className="modal-title">{title.toUpperCase()}</div>
          <Button image={cancel} buttonStyle="Button-empty" handler={handler} />
        </div>
        <div className="modal-content-container">
          {children}
          <Button text={buttonText} buttonStyle="Button" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
