import { Outlet } from "react-router-dom";
import LayOut from "../../Components/LayOut/screens/LayOut";

const Dashboard = () => {
  return (
    <>
      <LayOut>
        <Outlet/>
      </LayOut>
    </>
  );
};

export default Dashboard;
