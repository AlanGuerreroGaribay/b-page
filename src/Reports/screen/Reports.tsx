import InputSearch from "../../Components/Inputs/screens/InputSearch";
import SearchIcon from "../../assets/Input/search_icon.svg";
import Table from "../../Components/Table/screen/Table";
import Data from "../utils/MOCK_DATA (2).json";

const Reports = () => {
  return (
    <div className="neighbors-container">
      <div className="neighbors-input-container">
        <InputSearch icon={SearchIcon} placeholderText="Buscar" />
      </div>
      <div className="neighbors-display-container">
        <Table
          page="Reports"
          headers={["Id", "Estado", "Fecha", "Herramientas"]}
          tableData={Data}
        />
      </div>
    </div>
  );
};

export default Reports;
