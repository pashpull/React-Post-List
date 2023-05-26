import { createSlice } from '@reduxjs/toolkit';

import { IUser } from '../../models/IUser';

interface ICommentsState {
  userId: number;
  user?: IUser;
  isLoading: boolean;
}

const initialState: ICommentsState = {
  userId: 0,

  isLoading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    getUserLoading: (state, action) => {
      state.userId = action.payload;
      console.log(state.userId);
      state.isLoading = true;
    },
    getUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getUserLoading, getUser } = userSlice.actions;
export default userSlice.reducer;
