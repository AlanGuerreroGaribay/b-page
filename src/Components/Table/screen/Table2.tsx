import React, { ReactNode } from "react";
import Button from "../../Buttons/Button";
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
  actions?: string[];
};

export const Table2 = ({ headers, tableData, actions }: TableData) => {
  console.log(actions, "this data");
  return (
    <table>
      <Header headers={headers} />
      <Data tableData={tableData} actions={actions} />
    </table>
  );
};

const Data = ({
  tableData,
  actions,
}: {
  tableData: TableDataType[];
  actions?: string[];
}) => {
  return (
    <tbody className="header">
      {tableData.map((row) => (
        <tr>
          {Object.keys(row).map((el) => (
            <td>{row[el]}</td>
          ))}
          {actions && (
            <td>
              {actions.map((ac) => (
                <Button
                text={ac}
                  buttonStyle="Button-light-empty"
                />
              ))}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
};

const Header = ({ headers }: { headers: string[] }) => (
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
);
