import { Link } from "react-router-dom";
import { linksSideBar } from "./utils/SideBar.utils";
import { useState } from "react";
import Button from "../../../Buttons/Button";
import Exit from "../../../../assets/Buttons/RiUserReceived2Line.svg";
import "./styles/SideBar.css";

const SideBar = () => {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className="sidebar-container">
      <div className="sidebar-list-container">
        <ul>
          {linksSideBar.map((link, i) => {
            return (
              <Link
                key={i}
                to={`/Dashboard/${link.link}`}
                className="sidebar-link"
                // cambiar color de fondo al colocar cursor
                onMouseEnter={() => {
                  setIndex(i + 1);
                }}
                onMouseLeave={() => {
                  setIndex(null);
                }}
              >
                {/* cambio de icono con color opuesto al fondo */}
                {index !== link.id && (
                    <link rel="stylesheet" href="" className="id" />
                  ) && <img src={link.icon} alt="icon" />}
                {index === link.id && (
                  <img src={link.iconNegative} alt="icon" />
                )}
                <li>{link.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-logout">
        <Link style={{ textDecoration: "none" }} to="/">
          <Button buttonStyle="Button" image={Exit} text="Salir" />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
