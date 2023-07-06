import { createSlice } from '@reduxjs/toolkit';

import { IComment } from '../../models/IComment';

interface ICommentsState {
  postId: number;
  isLoading: boolean;
  comments: IComment[];
  error: string;
}

const initialState: ICommentsState = {
  postId: 0,
  isLoading: false,
  comments: [],
  error: '',
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState: initialState,
  reducers: {
    commentsRequest(state, action) {
      state.isLoading = true;
      state.postId = action.payload;
    },
    setComments(state, action) {
      state.comments = action.payload;
      state.isLoading = false;
    },
    commentsRequestError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { commentsRequest, setComments, commentsRequestError } =
  commentsSlice.actions;
export default commentsSlice.reducer;
