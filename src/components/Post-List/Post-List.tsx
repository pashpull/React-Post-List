import './Post-List.scss';

import { IPost } from '../../models/IPost';

import Post from '../../components/Post/Post';

interface PostListProps {
  posts: IPost[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <>
      <div className="post-list">
        {posts.length === 0 ? (
          <h2>Posts not found.</h2>
        ) : (
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        )}
      </div>
    </>
  );
};

export default PostList;
