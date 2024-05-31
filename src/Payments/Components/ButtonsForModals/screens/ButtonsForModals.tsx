import "../styles/ButtonsForModals.css";
import InputSearch from "../../../../Components/Inputs/screens/InputSearch";
import Button from "../../../../Components/Buttons/screen/Button";
import SearchIcon from "../../../../assets/Input/search_icon.svg";

type buttonsForModalsType = {
  setModalExpenses?: React.MouseEventHandler<HTMLDivElement> | undefined;
  setModalAgreement?: React.MouseEventHandler<HTMLDivElement> | undefined;
  setModalPayment?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const ButtonsForModals = ({
  setModalExpenses,
  setModalAgreement,
  setModalPayment,
}: buttonsForModalsType) => {
  return (
    <div className="payments-input-container">
      <div className="payments-button-container">
        <Button
          buttonStyle="Button-payments"
          text="Gasto"
          handler={setModalExpenses}
        />
        <Button
          buttonStyle="Button-payments"
          text="Convenio"
          handler={setModalAgreement}
        />
        <Button
          buttonStyle="Button-payments"
          text="Pago"
          handler={setModalPayment}
        />
      </div>
      <InputSearch icon={SearchIcon} placeholderText="Buscar" />
    </div>
  );
};

export default ButtonsForModals;
