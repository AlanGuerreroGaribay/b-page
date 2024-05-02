import "../styles/Table.css";
import View from "../../../assets/Table/View.svg";
import Lock from "../../../assets/Table/Lock.svg";

type TableData = {
  page: string;
  headers: Array<string>;
  tableData: Array<any>;
};

const Table = ({ page, headers, tableData }: TableData) => {
  return (
    <div className="table-container">
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
        {}
        {tableData.map((data, i) => {
          return (
            <tbody>
              {page === "Neighbors" && (
                <tr key={i}>
                  <td>{data[`${headers[0]}`]}</td>
                  <td>{data[`${headers[1]}`]}</td>
                  <td>{data[`${headers[2]}`]}</td>
                  <td>{data[`${headers[3]}`]}</td>
                  <td>
                    <div className="tools-container">
                      <img src={View} alt="" />
                      <img src={Lock} alt="" />
                    </div>
                  </td>
                </tr>
              )}
              {page === "Reports" && (
                <tr key={i}>
                  <td>{data[`${headers[0]}`]}</td>
                  <td>{data[`${headers[1]}`]}</td>
                  <td>{data[`${headers[2]}`]}</td>
                  <td>
                    <div className="tools-container">
                      <img src={View} alt="" />
                      <img src={Lock} alt="" />
                    </div>
                  </td>
                </tr>
              )}
              {page === "Payments" && (
                <tr key={i}>
                  <td>{data[`${headers[0]}`]}</td>
                  <td>{data[`${headers[1]}`]}</td>
                  <td>{data[`${headers[2]}`]}</td>
                  <td>{data[`${headers[3]}`]}</td>
                  <td>
                    <div className="tools-container">
                      <img src={View} alt="" />
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
