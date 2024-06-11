import { useState } from "react";
import View from "../../../assets/Table/View.svg";
import Lock from "../../../assets/Table/Lock.svg";
import Button from "../../Buttons/Button";
import Edit from "../../../assets/Buttons/RiPencilLine.svg";
import ModalReportDetail from "../../../features/Reports/components/ModalReport/ModalReportDetail";
import ModalPaymentDetail from "../../../features/Payments/components/ModalPaymentDetail/ModalPaymentDetail";
import "../styles/Table.css";
import { Table2 } from "./Table2";

type TableDataType = {
  Id?: number;
  Total?: string;
  Estado?: string;
  Fecha?: string;
  Casa?: number;
  Nombre?: string;
  Correo?: string;
  Telefono?: string;
};

type TableData = {
  page: string;
  headers: Array<string>;
  tableData: Array<TableDataType>;
};

const Table = ({ page, headers, tableData }: TableData) => {
  const [report, setReport] = useState<TableDataType>();
  const [neighbor, setNeighbor] = useState<TableDataType>();
  const [payment, setPayment] = useState<TableDataType>();
  const [modal, setModal] = useState<string>("");

  const paymentHandler = (data: TableDataType, modalType: string) => {
    setPayment(data);
    setModal(modalType);
  };

  console.log(report);
  console.log(neighbor);
  console.log(payment);

  return (
    <div className="table-container">
      <ModalReportDetail
        reportData={report}
        isOpen={modal}
        closeHandler={() => setModal("")}
      />
      <ModalPaymentDetail
        paymentData={payment}
        isOpen={modal}
        closeHandler={() => setModal("")}
      />
      <Table2 headers={headers} tableData={tableData} page={page} />
    </div>
  );
};

export default Table;
