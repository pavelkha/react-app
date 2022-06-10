import { createSlice } from '@reduxjs/toolkit';

const themeState = createSlice({
  name: 'themeState',
  initialState: { isLight: true },
  reducers: {
    changeTheme(state) {
      state.isLight = !state.isLight;
    },
  },
});

export const themeStateSlice = themeState.reducer;
export const { changeTheme } = themeState.actions;
