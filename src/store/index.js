import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice";
import ordersReducer from "../features/orders/ordersSlice";
import { authApi } from "../services/auth/authApi";
import { shopApi } from "../services/shop/shopApi";

// 1. Combinar reducers
const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
  orders: ordersReducer,
  user: userReducer,
  [authApi.reducerPath]: authApi.reducer,
  [shopApi.reducerPath]: shopApi.reducer,
});


const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"], 
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, shopApi.middleware),
});

export const persistor = persistStore(store); 
export default store;
