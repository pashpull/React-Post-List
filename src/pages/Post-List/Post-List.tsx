import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import './Post-List.scss';

import { getPostsLoading } from '../../redux/slices/postsSlice';

import Spinner from 'react-bootstrap/Spinner';

import Post from '../../components/Post/Post';
import { Col, Row } from 'react-bootstrap';

const PostList = () => {
  const postsState = useAppSelector((state) => {
    return { posts: state.posts.posts, isLoading: state.posts.isLoading };
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsLoading());
  }, []);

  return (
    <>
      {postsState.isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row xs={1} md={1} lg={1} className="g-4">
          {postsState.posts.map((post) => {
            return (
              <Col key={post.id}>
                <Post post={post} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default PostList;
