import "../styles/Button.css";

type Button = {
  text?: string;
  image?: string;
  buttonStyle?: "Button" | "Button-payments" | "Button-empty";
  handler?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const Button = ({ text, image, buttonStyle, handler }: Button) => {
  return (
    <div className={buttonStyle} onClick={handler}>
      {image && <img src={image} alt="" />}
      {text}
    </div>
  );
};

export default Button;
