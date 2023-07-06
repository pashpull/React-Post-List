import { createSlice } from '@reduxjs/toolkit';

interface IMenuState {
  isActive: boolean;
}

const initialState: IMenuState = {
  isActive: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
    setMenuIsActive(state) {
      state.isActive = !state.isActive;
    },
  },
});

export const { setMenuIsActive } = menuSlice.actions;
export default menuSlice.reducer;
