import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuItems: [],
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setMenuItems(state, action) {
      state.menuItems = action.payload;
    },
  },
});

export const { setMenuItems } = navigationSlice.actions;

export default navigationSlice.reducer;
