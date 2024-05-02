import { ReactNode } from "react";
import SideBar from "../components/SideBar/SideBar";
import Napoles from "../../../assets/LayOut/Napoles.svg"
import '../styles/LayOut.css'

type LayoutChildren = {
  children: ReactNode;
};

const LayOut = ({ children }: LayoutChildren) => {
  return (
    <div className="layout-container">
      <SideBar />
      <div className="layout-page-container">
        <div className="layout-image-container">
          <img src={Napoles} alt="" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default LayOut;
