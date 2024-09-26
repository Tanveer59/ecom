// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../feature/createSlice';
export const store = configureStore({
  reducer: {
    ChangeContent: counterSlice
  }
});

