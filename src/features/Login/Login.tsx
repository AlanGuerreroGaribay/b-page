import { LoginType } from "./utilities/Login.type";
import belcantoLogo from "../../assets/Login/belcanto_napoles_logo.svg";
import InputSearch from "../../Components/Inputs/screens/InputSearch";
import Button from "../../Components/Buttons/Button";
import styles from "./Login.module.css";

const Login = ({ authHandler }: LoginType) => {
  return (
    <div className={styles.loginScreenContainer}>
      <div className={styles.loginScreen}>
        <div className={styles.loginContainer}>
          <div className={styles.loginImageArea}>
            <img src={belcantoLogo} alt="belcanto_Napoles" />
          </div>
          <div className={styles.loginInputArea}>
            <div className={styles.loginInputContainer}>
              <InputSearch placeholderText="Email" icon="" />
              <InputSearch placeholderText="Password" icon="" />
            </div>
            <Button
              buttonStyle="Button"
              text="Ingresar"
              handler={authHandler}
            />
          </div>
        </div>
        <div className={styles.loginImageContainer} />
      </div>
    </div>
  );
};

export default Login;
