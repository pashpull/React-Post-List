import './Comment.scss';

interface CommentProps {
  email: string;
  text: string;
}

const Comment = ({ email, text }: CommentProps) => {
  return (
    <div className="comment">
      <h2 className="comment__title">{email}</h2>
      <p className="comment__content">{text}</p>
    </div>
  );
};

export default Comment;
