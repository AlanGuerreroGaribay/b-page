import "../styles/InputSearch.css";

type IconProps = {
  icon: string;
  inputValue?: string | undefined;
  placeholderText?: string | undefined;
};

const InputSearch = ({ icon, placeholderText, inputValue }: IconProps) => {
  return (
    <div className="input-container">
      <input
        className="input-search-comp"
        value={inputValue}
        placeholder={placeholderText}
        type="text"
      />
      {icon === "" ? (
        <div style={{ width: "25px", height: "25px" }} />
      ) : (
        <img src={icon} alt="search" />
      )}
    </div>
  );
};

export default InputSearch;
