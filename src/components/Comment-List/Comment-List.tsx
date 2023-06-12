import { useState, useEffect } from 'react';
import './Comment-List.scss';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { getCommentsLoading } from '../../redux/slices/commentsSlice';

import { IComment } from '../../models/IComment';

import Spinner from 'react-bootstrap/Spinner';

import Button from '../../UI/Button/Button';
import Comment from '../Comment/Comment';

interface CommentListProps {
  postId: number;
}

const CommentList = ({ postId }: CommentListProps) => {
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
      ? dispatch(getCommentsLoading(postId))
      : setComments([]);
  };

  useEffect(() => {
    commentsState.postId === postId && setComments(commentsState.comments);
  }, [commentsState.comments]);

  return (
    <div className="comments">
      <Button text={'Comments'} toDo={commetnsBtnHandler} />
      {commentsState.isLoading && postId === commentsState.postId ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        comments.map((comment: IComment) => {
          return (
            <Comment
              key={comment.id}
              email={comment.email}
              text={comment.body}
            />
          );
        })
      )}
    </div>
  );
};

export default CommentList;
