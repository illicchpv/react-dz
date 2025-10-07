import './Button.css';

function Button({ className, children, onClick }) {
  const cl = (`button ${className}`).trim();

  return (
    <button className={cl} onClick={onClick}>{children}</button>
  );
}

export default Button;