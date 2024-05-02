import Table from "../../Components/Table/screen/Table";
import InputSearch from "../../Components/Inputs/screens/InputSearch";
import SearchIcon from "../../assets/Input/search_icon.svg";
import Data from "../utils/MOCK_DATA (2).json";
import "../styles/Neighbors.css";

const Neighbors = () => {
  return (
    <div className="neighbors-container">
      <div className="neighbors-input-container">
        <InputSearch icon={SearchIcon} placeholderText="Buscar" />
      </div>
      <div className="neighbors-display-container">
        <Table
          page="Neighbors"
          headers={["Casa", "Nombre", "Correo", "Telefono", "Herramientas"]}
          tableData={Data}
        />
      </div>
    </div>
  );
};

export default Neighbors;
