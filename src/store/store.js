import { configureStore } from "@reduxjs/toolkit";
import page from "./slices/pageIndex";
import home from "./slices/home";
import sections from "./slices/sections";
import product from "./slices/product";
import cart from "./slices/cart";
import account from "./slices/account";


const store =configureStore({
    reducer:{
        page:page.reducer,
        home:home.reducer,
        sections:sections.reducer,
        product:product.reducer,
        cart:cart.reducer,
        account:account.reducer
    }
})
export default store
