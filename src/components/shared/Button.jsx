const Button = ({ label, onClick, className }) => (
  <button className={`tab-button ${className}`} onClick={onClick}>
    {label}
  </button>
);

export default Button;
