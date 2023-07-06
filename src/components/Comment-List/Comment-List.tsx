import { useState, useEffect } from 'react';
import './Comment-List.scss';

import { useAppSelector, useAppDispatch } from '../../hooks/hooksForRedux';
import { commentsRequest } from '../../redux/slices/commentsSlice';

import { IComment } from '../../models/IComment';

import Button from '../../UI/Button/Button';
import Loader from '../Loader/Loader';
import Comment from '../Comment/Comment';

interface CommentListProps {
  postId: number;
}

const CommentList = ({ postId }: CommentListProps) => {
  const commentsState = useAppSelector((state) => state.comments);

  const [comments, setComments] = useState<IComment[]>([]);
  const [commentListIsOpen, setCommentListIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const commentsBtnHandler = (): void => {
    comments.length === 0 ? dispatch(commentsRequest(postId)) : setComments([]);
    setCommentListIsOpen(!commentListIsOpen);
  };

  const itIsThisList: boolean = commentsState.postId === postId;

  useEffect((): void => {
    if (commentListIsOpen && itIsThisList) {
      setComments(commentsState.comments);
    }
  }, [commentsState.comments]);

  return (
    <div key={postId} className="comment-list">
      <Button text={'Comments'} toDo={commentsBtnHandler} />
      {commentListIsOpen &&
        (commentsState.isLoading && itIsThisList ? (
          <Loader />
        ) : comments.length === 0 ? (
          <h2>Comments not found.</h2>
        ) : commentsState.error ? (
          <h2>{commentsState.error}</h2>
        ) : (
          comments.map((comment: IComment) => {
            return <Comment key={comment.id} comment={comment} />;
          })
        ))}
    </div>
  );
};

export default CommentList;
