import './Button.scss';

interface ButtonProps {
  text: string;
  toDo: any;
}

const Button = ({ text, toDo }: ButtonProps) => {
  return (
    <button className="button" onClick={toDo}>
      {text}
    </button>
  );
};

export default Button;
