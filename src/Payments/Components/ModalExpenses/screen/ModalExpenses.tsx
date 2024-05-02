import Button from "../../../../Components/Buttons/screen/Button";
import cancel from "../../../../assets/Modal/cancel-svgrepo-com 1.svg";
import "../styles/ModalExpenses.css";

type ModalExpensesType = {
  showModal: React.MouseEventHandler<HTMLDivElement>;
};

const ModalExpenses = ({ showModal }: ModalExpensesType) => {
  return (
    <div className="modal-screen">
      <div className="modal-container-show">
        <div className="modal-button-container">
          <div className="modal-title">GASTO</div>
          <Button
            image={cancel}
            buttonStyle="Button-empty"
            handler={showModal}
          />
        </div>
        <div className="modal-content-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            doloribus perferendis aut impedit velit ipsa delectus illo
            accusantium inventore possimus dolores amet illum quod, quas,
            corrupti, cupiditate alias ullam magnam itaque aliquid fugiat
            reiciendis necessitatibus ab fuga! Officiis porro eveniet quidem
            commodi nesciunt vitae maxime tempora dolorum! Ipsam, dolorem
            accusamus?
          </p>
          <Button text="Guardar" buttonStyle="Button" />
        </div>
      </div>
    </div>
  );
};

export default ModalExpenses;
