import { createSlice } from '@reduxjs/toolkit';

interface IErrorState {
  isError: boolean;
  error: string;
}

const initialState: IErrorState = {
  isError: false,
  error: '',
};

const errorSlice = createSlice({
  name: 'error',
  initialState: initialState,
  reducers: {
    setError(state, action) {
      state.isError = true;
      state.error = action.payload;
    },
    resetError(state) {
      state.error = '';
      state.isError = false;
    },
  },
});

export const { setError, resetError } = errorSlice.actions;
export default errorSlice.reducer;
