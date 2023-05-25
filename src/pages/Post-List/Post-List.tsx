import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import './Post-List.scss';
import { getPostsLoading } from '../../redux/slices/postsSlice';
import Post from '../../components/Post/Post';

const PostList = () => {
  const postsState = useAppSelector((state) => {
    return { posts: state.posts.posts, isLoading: state.posts.isLoading };
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsLoading());
  }, []);

  return (
    <div className="post-list">
      {postsState.isLoading ? (
        <h1>Грузим....</h1>
      ) : (
        postsState.posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })
      )}
    </div>
  );
};

export default PostList;
