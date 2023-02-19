interface ButtonProps {
  icon: string;
  actionOnClick: () => void;
}

const Button = ({ actionOnClick, icon }: ButtonProps): JSX.Element => {
  return <button onClick={actionOnClick}>{icon}</button>;
};

export default Button;
