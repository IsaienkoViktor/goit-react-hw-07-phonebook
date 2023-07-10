import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'Contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.items.push(payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      const index = state.items.findIndex(item => item.id === payload);
      state.items.splice(index, 1);
    },
    setFilter: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactSlice.actions;
export const contactsSlice = contactSlice.reducer;
