import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { authReducer } from "./auth/authSlice";
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    authReduser: authReducer,
  }
});



// import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contactSlice";
// import { authReducer } from "./auth/authSlice";

// import storage from 'redux-persist/lib/storage'
// import { persistStore, persistReducer } from 'redux-persist'



// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// }

// export const store = configureStore({
//   reducer: {
//     authReduser: authReducer,
//     contacts: contactsReducer,
//     // auth: persistReducer(authPersistConfig, authReducer),

//   }
// });

// export const persistor = persistStore(store)








 