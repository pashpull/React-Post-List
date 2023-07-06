import { createSlice } from '@reduxjs/toolkit';

import { IUser } from '../../models/IUser';
import { IPost } from '../../models/IPost';

interface IUserState {
  userId: number;
  user?: IUser;
  isLoading: boolean;
  userPosts: IPost[];
  error: string;
}

const initialState: IUserState = {
  userId: 0,
  isLoading: false,
  userPosts: [],
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    userRequest(state, action) {
      state.error = '';
      state.isLoading = true;
      state.userId = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload.user;
      state.userPosts = action.payload.userPosts;
      state.isLoading = false;
    },
    userRequestError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
      state.userId = 0;
    },
  },
});

export const { userRequest, setUser, userRequestError } = userSlice.actions;
export default userSlice.reducer;
