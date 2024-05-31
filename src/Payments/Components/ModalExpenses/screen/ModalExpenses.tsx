import Modal from "../../../../Components/Modal/screen/Modal";
import "../styles/ModalExpenses.css";

type ModalExpensesType = {
  isOpen: string;
  closeModal: React.MouseEventHandler<HTMLDivElement>;
};

const ModalExpenses = ({ isOpen, closeModal }: ModalExpensesType) => {
  return (
    <>
      {isOpen === "expense" && (
        <Modal title="gasto" handler={closeModal}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            doloribus perferendis aut impedit velit ipsa delectus illo
            accusantium inventore possimus dolores amet illum quod, quas,
            corrupti, cupiditate alias ullam magnam itaque aliquid fugiat
            reiciendis necessitatibus ab fuga! Officiis porro eveniet quidem
            commodi nesciunt vitae maxime tempora dolorum! Ipsam, dolorem
            accusamus?
          </p>
        </Modal>
      )}
    </>
  );
};

export default ModalExpenses;
