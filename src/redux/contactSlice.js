import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, fetchTasks } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    findContact(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchTasks.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addTask.pending](state) {
      state.contacts.isLoading = true;
    },
    [addTask.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addTask.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [deleteTask.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteTask.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;

      const index = state.contacts.items.findIndex(
        item => item.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteTask.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const { reducer: contactsReducer, actions } = contactSlice;
export const { findContact } = actions;
