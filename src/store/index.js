import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/cart/cartSlice";
import ordersReducer from "../features/orders/ordersSlice";

const store = configureStore({
    reducer:{
        shop: shopReducer,
        cart: cartReducer,
        orders: ordersReducer, 
    }
})

export default store;