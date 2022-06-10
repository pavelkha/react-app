import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { themeStateSlice } from './toolkitSlice';

const rootReducer = combineReducers({
  themeState: themeStateSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
