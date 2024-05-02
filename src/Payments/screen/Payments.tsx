import { useState } from "react";
import Data from "../utils/MOCK_DATA (2).json";
import InputSearch from "../../Components/Inputs/screens/InputSearch";
import Table from "../../Components/Table/screen/Table";
import SearchIcon from "../../assets/Input/search_icon.svg";
import Button from "../../Components/Buttons/screen/Button";
import ModalPayment from "../Components/ModalPayments/screen/ModalPayment";
import ModalExpenses from "../Components/ModalExpenses/screen/ModalExpenses";
import ModalAgreement from "../Components/ModalAgreement/screen/ModalAgreement";
import "../styles/Paymensts.css";

const Payments = () => {
  const [show, setShow] = useState<boolean>(false);
  const [modal, setModal] = useState<string>("");

  const showModal = (modal: string) => {
    setShow(!show);
    setModal(modal);
  };

  const hideModalHandler = () => {
    setShow(!show);
    setModal("");
  };

  return (
    <div className="payments-container">
      {/* Mostrar modal al click */}
      {show && modal === "payment" && (
        <ModalPayment showModal={() => hideModalHandler()} />
      )}
      {show && modal === "expense" && (
        <ModalExpenses showModal={() => hideModalHandler()} />
      )}
      {show && modal === "agreement" && (
        <ModalAgreement showModal={() => hideModalHandler()} />
      )}
      {/* Termina area de modal */}

      {/* Tablero superior */}
      <div className="payments-input-container">
        <div className="payments-button-container">
          <Button
            buttonStyle="Button-payments"
            text="Gasto"
            handler={() => showModal("expense")}
          />
          <Button
            buttonStyle="Button-payments"
            text="Convenio"
            handler={() => showModal("agreement")}
          />
          <Button
            buttonStyle="Button-payments"
            text="Pago"
            handler={() => showModal("payment")}
          />
        </div>
        <InputSearch icon={SearchIcon} placeholderText="Buscar" />
      </div>
      {/* Termina el tablero superior */}

      {/* Tabla de Datos*/}
      <div className="payments-display-container">
        <Table
          page="Payments"
          headers={["Casa", "Estado", "Total", "Fecha", "Herramientas"]}
          tableData={Data}
        />
      </div>
      {/* Termina la tabla de Datos*/}
    </div>
  );
};

export default Payments;
