import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchContacts();
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
