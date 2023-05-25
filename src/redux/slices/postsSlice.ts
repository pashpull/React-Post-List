import { createSlice } from '@reduxjs/toolkit';

import { IPost } from '../../models/IPost';

interface IPostsState {
  posts: IPost[];
  isLoading: boolean;
}

const initialState: IPostsState = {
  posts: [],
  isLoading: true,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    getPostsLoading: (state) => {
      state.isLoading = true;
    },
    getPosts: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getPostsLoading, getPosts } = postsSlice.actions;
export default postsSlice.reducer;
