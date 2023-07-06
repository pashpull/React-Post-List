import { createSlice } from '@reduxjs/toolkit';

import { IPost } from '../../models/IPost';

interface IPostsState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
}

const initialState: IPostsState = {
  posts: [],
  isLoading: false,
  error: '',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    postsRequest(state) {
      state.error = '';
      state.isLoading = true;
    },
    setPosts(state, action) {
      state.posts = action.payload;
      state.isLoading = false;
    },
    postsRequestError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { postsRequest, setPosts, postsRequestError } = postsSlice.actions;
export default postsSlice.reducer;
