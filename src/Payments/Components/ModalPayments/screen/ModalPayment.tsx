import Button from "../../../../Components/Buttons/screen/Button";
import cancel from "../../../../assets/Modal/cancel-svgrepo-com 1.svg";
import InputSearch from "../../../../Components/Inputs/screens/InputSearch";
import "../styles/ModalPayment.css";

type ModalPaymentType = {
  showModal: React.MouseEventHandler<HTMLDivElement>;
};

const ModalPayment = ({ showModal }: ModalPaymentType) => {
  return (
    <div className="modal-screen">
      <div className="modal-container-show">
        <div className="modal-button-container">
          <div className="modal-title">Pago</div>
          <Button
            image={cancel}
            buttonStyle="Button-empty"
            handler={showModal}
          />
        </div>
        <div className="modal-content-container">
          <div className="modal-display-container">
            <div className="modal-input-container">
              <InputSearch icon="" />
            </div>
            <div className="modal-text-container">$3000.00</div>
            <div className="modal-input-container">
              <InputSearch icon="" />
            </div>
            <div className="modal-text-container">$3000.00</div>
            <div className="modal-input-container">
              <InputSearch icon="" />
            </div>
          </div>
          <Button text="Guardar" buttonStyle="Button" />
        </div>
      </div>
    </div>
  );
};

export default ModalPayment;
