import { Link } from 'react-router-dom';
import './Post.scss';

import stringPreparing from '../../lib/stringPreparing';

import { IPost } from '../../models/IPost';

import CommentList from '../Comment-List/Comment-List';

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  const { userId, title, body, id } = post;

  return (
    <div className="post">
      <div className="post__head">
        <Link to={`React-Post-List/user/${userId}`} className="post__avatar">
          <img
            src="/JasonStatham.jpg"
            alt="Avatar"
            className="post__avatar-img"
          />
        </Link>
        <div className="post__title">
          <h2>{stringPreparing(title)}</h2>
        </div>
      </div>
      <div className="post__body">
        <p className="post__content">{stringPreparing(body)}</p>
      </div>
      <CommentList postId={id} />
    </div>
  );
};

export default Post;
