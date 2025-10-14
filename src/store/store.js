// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/auth/authSlice";
// import categoryReducer from"../features/category/categorySlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     category: categoryReducer
//   }
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // uses localStorage
import authReducer from "../features/auth/authSlice";
import categoryReducer from "../features/category/categorySlice";

// Config for persisting slices
const authPersistConfig = {
  key: "auth",
  storage,
};

const categoryPersistConfig = {
  key: "category",
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedCategoryReducer = persistReducer(categoryPersistConfig, categoryReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    category: persistedCategoryReducer,
  },
});

export const persistor = persistStore(store);
export default store;
