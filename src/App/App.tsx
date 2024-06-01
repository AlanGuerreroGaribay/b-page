import { useNavigate } from "react-router-dom";
import Login from "../features/Login/Login";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <Login
      user_name=""
      password=""
      authHandler={() => navigate("/Dashboard/Home")}
    />
  );
}

export default App;
