import { Link } from 'react-router-dom';
import './Post.scss';

import { IPost } from '../../models/IPost';
import CommentList from '../Comment-List/Comment-List';

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  const userAvatarHandler = (): void => {
    localStorage.setItem('userId', post.userId.toString());
  };

  const stringPreparing = (string: string): string => {
    let preparedString = string[0].toUpperCase() + string.slice(1);
    return preparedString;
  };

  return (
    <div className="post">
      <div className="post__head">
        <Link to={'/user'} onClick={userAvatarHandler} className="post__avatar">
          <img
            src="/JasonStatham.jpg"
            alt="Avatar"
            className="post__avatar-img"
          />
        </Link>
        <div className="post__title">
          <h2>{stringPreparing(post.title)}</h2>
        </div>
      </div>
      <div className="post__body">
        <p className="post__content">{stringPreparing(post.body)}</p>
      </div>
      <CommentList postId={post.id} />
    </div>
  );
};

export default Post;
