import { useEffect } from 'react';
import './Post-List-Page.scss';

import { useAppSelector, useAppDispatch } from '../../hooks/hooksForRedux';
import { postsRequest } from '../../redux/slices/postsSlice';

import Loader from '../../components/Loader/Loader';

import PostList from '../../components/Post-List/Post-List';

const PostListPage = () => {
  const postsState = useAppSelector((state) => state.posts);

  const dispatch = useAppDispatch();

  useEffect((): void => {
    !postsState.posts.length && dispatch(postsRequest());
  }, []);

  return postsState.isLoading ? (
    <Loader />
  ) : postsState.error ? (
    <h2>{postsState.error}</h2>
  ) : (
    <PostList posts={postsState.posts} />
  );
};

export default PostListPage;
