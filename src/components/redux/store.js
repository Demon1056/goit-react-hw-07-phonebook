import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { myContactsSlice } from './myContactSlise';

export const store = configureStore({
  reducer: {
    myContacts: myContactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});


