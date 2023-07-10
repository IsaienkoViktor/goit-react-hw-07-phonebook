import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'Contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  // reducers: {
  //   addContact: {
  //     reducer(state, { payload }) {
  //       state.items.push(payload);
  //     },
  //     prepare(contact) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           ...contact,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, { payload }) {
  //     const index = state.items.findIndex(item => item.id === payload);
  //     state.items.splice(index, 1);
  //   },
  //   setFilter: {
  //     reducer(state, { payload }) {
  //       state.filter = payload;
  //     },
  //   },
  // },
  // extraReducers: builder => {
  //   builder.addCase();
  // },
});

export default contactSlice.reducer;
