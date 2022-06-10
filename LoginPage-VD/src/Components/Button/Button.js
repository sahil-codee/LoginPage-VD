import "./Button.css";

function Button(props) {
  return (
    <button {...props} className={"btn button "+props.className} style={{ backgroundColor: props.color }}>
      {props.children}
    </button>
  );
}

export default Button;
