import './Comment.scss';

import stringPreparing from '../../lib/stringPreparing';

import { IComment } from '../../models/IComment';

interface CommentProps {
  comment: IComment;
}

const Comment = ({ comment }: CommentProps) => {
  const { email, body } = comment;

  return (
    <div className="comment">
      <h2 className="comment__title">{email}</h2>
      <p className="comment__content">{stringPreparing(body)}</p>
    </div>
  );
};

export default Comment;
