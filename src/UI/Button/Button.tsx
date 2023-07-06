import './Button.scss';

interface ButtonProps {
  text: string;
  toDo: any;
  localClassName?: string;
}

const Button = ({ text, toDo, localClassName }: ButtonProps) => {
  return (
    <button
      className={`button${localClassName ? localClassName : ''}`}
      onClick={toDo}
    >
      {text}
    </button>
  );
};

export default Button;
