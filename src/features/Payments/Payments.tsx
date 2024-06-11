import { useState } from "react";
import Data from "../Payments/utils/MOCK_DATA (2).json";
import Table from "../../Components/Table/screen/Table";
import ModalPayment from "./components/ModalPayment/ModalPayment";
import ModalExpenses from "./components/ModalExpenses/ModalExpenses";
import ModalAgreement from "./components/ModalAgreement/ModalAgreement";
import ButtonsForModals from "./components/ButtonsForModals/ButtonsForModals";
import "./Paymensts.css";
import { Table2 } from "../../Components/Table/screen/Table2";

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
        <Table2
          page="Payments"
          headers={["Casa", "Estado", "Total", "Fecha", "Correo", ' ']}
          actions={['Editar', 'Eliminar']}
          tableData={Data}
        />
      </div>
      {/* Termina la tabla de Datos*/}
    </div>
  );
};

export default Payments;
