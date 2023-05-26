import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { getCommentsLoading } from '../../redux/slices/commentsSlice';

import Spinner from 'react-bootstrap/Spinner';

import { IPost } from '../../models/IPost';
import { IComment } from '../../models/IComment';

import Button from '../../UI/Button/Button';

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  const [comments, setComments] = useState<IComment[]>([]);

  const commentsState = useAppSelector((state) => {
    return {
      comments: state.comments.comments,
      isLoading: state.comments.isLoading,
      postId: state.comments.postId,
    };
  });

  const dispatch = useAppDispatch();

  const commetnsBtnHandler = (): void => {
    comments.length === 0
      ? dispatch(getCommentsLoading(post.id))
      : setComments([]);
  };

  const userAvatarHandler = (): void => {
    localStorage.setItem('userId', post.userId.toString());
    // useLocalStorage(post.userId, 'userId');
    // dispatch(getUserLoading(post.userId));
  };

  const stringPreparing = (string: string): string => {
    let preparedString = string[0].toUpperCase() + string.slice(1);
    return preparedString;
  };

  useEffect(() => {
    commentsState.postId === post.id && setComments(commentsState.comments);
  }, [commentsState.comments]);

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

      <Button text={'Comments'} toDo={commetnsBtnHandler} />

      <div className="post__comments">
        {commentsState.isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          comments.map((comment: IComment) => {
            return <p key={comment.id}>{comment.body}</p>;
          })
        )}
      </div>
    </div>
  );
};

export default Post;
