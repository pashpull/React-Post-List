import './CommentList.scss';

interface CommentList {}

const CommentList = ({ post }: CommentList) => {
  // const stringPreparing = (string: string): string => {
  //   let preparedString = string[0].toUpperCase() + string.slice(1);
  //   return preparedString;
  // };

  return (
    <div className="comment-list">
      <div className="post__head">
        <div className="post__avatar">
          <img
            src="/JasonStatham.jpg"
            alt="Avatar"
            className="post__avatar-img"
          />
        </div>
        <div className="post__title">
          <h2>{}</h2>
        </div>
      </div>
      <div className="post__body">
        <p className="post__content">{}</p>
      </div>
    </div>
  );
};

export default CommentList;
