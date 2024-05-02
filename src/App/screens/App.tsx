import { useNavigate } from "react-router-dom";
import Login from "../../Login/screens/Login";
import "../styles/App.css";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Login
        user_name=""
        password=""
        authHandler={()=>navigate("/Dashboard/Home")}
      />
    </>
  );
}

export default App;
