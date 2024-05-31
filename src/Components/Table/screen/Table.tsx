import { useState } from "react";
import View from "../../../assets/Table/View.svg";
import Lock from "../../../assets/Table/Lock.svg";
import Button from "../../Buttons/screen/Button";
import Edit from "../../../assets/Buttons/RiPencilLine.svg";
import ModalReportDetail from "../../../Reports/Components/ModalReport/screens/ModalReportDetail";
import ModalPaymentDetail from "../../../Payments/Components/ModalPaymentDetail/ModalPaymentDetail";
import "../styles/Table.css";

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
      <table>
        <thead className="header">
          <tr>
            {headers.map((head, i) => {
              return (
                <>
                  <th key={i}>{head}</th>
                </>
              );
            })}
          </tr>
        </thead>
        {tableData.map((data, i: number) => {
          return (
            <tbody>
              {page === "Neighbors" && (
                <tr key={i}>
                  <td>{data?.Casa}</td>
                  <td>{data?.Nombre}</td>
                  <td>{data?.Correo}</td>
                  <td>{data?.Telefono}</td>
                  <td>
                    <div className="tools-container">
                      <Button
                        image={Edit}
                        buttonStyle="Button-light-empty"
                        handler={() => {
                          setNeighbor(data);
                          setModal("");
                        }}
                      />
                      <img src={Lock} alt="" />
                    </div>
                  </td>
                </tr>
              )}
              {page === "Reports" && (
                <tr key={i}>
                  <td>{data.Id}</td>
                  <td>{data.Estado}</td>
                  <td>{data.Fecha}</td>
                  <td>
                    <div className="tools-container">
                      <Button
                        image={View}
                        buttonStyle="Button-light-empty"
                        handler={() => {
                          setReport(data);
                          setModal("report");
                        }}
                      />
                      <img src={Lock} alt="" />
                    </div>
                  </td>
                </tr>
              )}
              {page === "Payments" && (
                <tr key={i}>
                  <td>{data?.Casa}</td>
                  <td>{data?.Estado}</td>
                  <td>{data?.Total}</td>
                  <td>{data?.Fecha}</td>
                  <td>
                    <div className="tools-container">
                      <Button
                        image={View}
                        buttonStyle="Button-light-empty"
                        handler={() => {
                          paymentHandler(data, "payment");
                        }}
                      />
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
