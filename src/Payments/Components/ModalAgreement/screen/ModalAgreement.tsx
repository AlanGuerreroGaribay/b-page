import Modal from "../../../../Components/Modal/screen/Modal";
import InputSearch from "../../../../Components/Inputs/screens/InputSearch";
import "../styles/ModalAgreement.css";

type ModalType = {
  isOpen: string;
  closeModal?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const ModalAgreement = ({ isOpen, closeModal }: ModalType) => {
  return (
    <>
      {isOpen === "agreement" && (
        <Modal title="convenio" handler={closeModal}>
          <div className="modal-display-container">
            <div className="modal-input-container">
              <InputSearch icon="" placeholderText="Casa" />
            </div>
            <div className="modal-text-container">$3000.00</div>
          </div>
          <div className="modal-display-container">
            <div className="modal-input-container">
              <InputSearch icon="" placeholderText="Cantidad de Pagos"/>
            </div>
            <div className="modal-text-container">$3000.00</div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ModalAgreement;
