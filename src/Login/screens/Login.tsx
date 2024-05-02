import { LoginType } from "../utilities/Login.type";
import belcantoLogo from "../../assets/Login/belcanto_napoles_logo.svg";
import InputSearch from "../../Components/Inputs/screens/InputSearch";
import Button from "../../Components/Buttons/screen/Button";
import "../styles/Login.styles.css";

const Login = ({ authHandler }: LoginType) => {
  return (
    <div className="login-screen-container">
      <div className="login-screen">
        <div className="login-container">
          <div className="login-image-area">
            <img src={belcantoLogo} alt="belcanto_Napoles" />
          </div>
          <div className="login-input-area">
            <div className="login-input-container">
              <InputSearch placeholderText="Email" icon="" />
              <InputSearch placeholderText="Password" icon="" />
            </div>
            <Button buttonStyle="Button" text="Ingresar" handler={authHandler} />
          </div>
        </div>
        <div className="login-image-container" />
      </div>
    </div>
  );
};

export default Login;
