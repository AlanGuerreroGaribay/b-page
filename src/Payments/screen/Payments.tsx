import { useState } from "react";
import Data from "../utils/MOCK_DATA (2).json";
import Table from "../../Components/Table/screen/Table";
import ModalPayment from "../Components/ModalPayments/screen/ModalPayment";
import ModalExpenses from "../Components/ModalExpenses/screen/ModalExpenses";
import ModalAgreement from "../Components/ModalAgreement/screen/ModalAgreement";
import ButtonsForModals from "../Components/ButtonsForModals/screens/ButtonsForModals";
import "../styles/Paymensts.css";

const Payments = () => {
  const [modal, setModal] = useState<string>("");

  return (
    <div className="payments-container">
      {/* Mostrar modal al click */}
      <ModalPayment isOpen={modal} closeModal={() => setModal("")} />
      <ModalExpenses isOpen={modal} closeModal={() => setModal("")} />
      <ModalAgreement isOpen={modal} closeModal={() => setModal("")} />
      {/* Termina area de modal */}

      {/* Tablero superior */}
      <ButtonsForModals
        setModalExpenses={() => setModal("expense")}
        setModalAgreement={() => setModal("agreement")}
        setModalPayment={() => setModal("payment")}
      />
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
