import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './createSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
