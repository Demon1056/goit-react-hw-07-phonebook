import { createSlice } from '@reduxjs/toolkit';


export const myContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null
    }
  },
  reducers: {
    addContact({ contacts }, action) {
      contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, deleteContact } = myContactsSlice.actions;




