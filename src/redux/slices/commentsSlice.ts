import { createSlice } from '@reduxjs/toolkit';

import { IComment } from '../../models/IComment';

interface ICommentsState {
  postId: number;
  comments: IComment[];
  isLoading: boolean;
}

const initialState: ICommentsState = {
  postId: 0,
  comments: [],
  isLoading: true,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState: initialState,
  reducers: {
    getCommentsLoading: (state, action) => {
      state.postId = action.payload;
      state.isLoading = true;
    },
    getComments: (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getCommentsLoading, getComments } = commentsSlice.actions;
export default commentsSlice.reducer;
