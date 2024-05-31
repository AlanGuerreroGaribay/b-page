import InputSearch from "../../../../Components/Inputs/screens/InputSearch";
import Modal from "../../../../Components/Modal/screen/Modal";
import "../styles/ModalPayment.css";

type ModalPaymentType = {
  isOpen: string;
  closeModal: React.MouseEventHandler<HTMLDivElement>;
};

const ModalPayment = ({ isOpen, closeModal }: ModalPaymentType) => {
  return (
    <>
      {isOpen === "payment" && (
        <Modal title="pago" handler={closeModal}>
          <div className="modal-content-container">
            <div className="modal-display-container">
              <div className="modal-input-container">
                <InputSearch icon="" placeholderText="Casa" />
              </div>
              <div className="modal-text-container">$3000.00</div>
              <div className="modal-input-container">
                <InputSearch icon="" placeholderText="Monto" />
              </div>
              <div className="modal-text-container">$3000.00</div>
              <div className="modal-input-container">
                <InputSearch icon="" placeholderText="Metodo de pago" />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ModalPayment;
