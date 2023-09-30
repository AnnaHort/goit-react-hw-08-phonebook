import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { authReducer } from "./auth/authSlice";
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    authReduser: authReducer,
  }
});













 