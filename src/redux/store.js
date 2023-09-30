import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { authReducer } from "./auth/slice";
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    authReducer
  }
});













 