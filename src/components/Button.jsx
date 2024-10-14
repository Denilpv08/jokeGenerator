import "./Button.css";

const Button = ({ callApi }) => {
  return <button onClick={callApi}>Haz clic para generar un chiste.</button>;
};

// Export Button Component
export default Button;
