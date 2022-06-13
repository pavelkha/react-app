import { createSlice } from '@reduxjs/toolkit';
import { themeInitialState } from '../assets/theme';

const themeState = createSlice({
  name: 'themeState',
  initialState: { isLight: themeInitialState },
  reducers: {
    changeTheme(state) {
      state.isLight = !state.isLight;
    },
  },
});

export const themeStateSlice = themeState.reducer;
export const { changeTheme } = themeState.actions;
