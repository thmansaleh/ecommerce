import { createSlice } from "@reduxjs/toolkit";




 const cart =createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        loading:true,
        total:0
     
    },
    reducers:{
     
        addToCart(state,action){
            const newItem ={
                id:action.payload.item.id,
                name:action.payload.item.title,
                price:action.payload.item.price,
                quantity:1,
                img:action.payload.item.thumbnail,
                // totalPrice:action.payload.item.price
            }
           const check= state.cartItems.find(e=>  e.id===newItem.id)
        //    !check&&state.cartItems.push(newItem);
        //    !check?state.total+=action.price:null
           if ( !check) {
            state.cartItems.push(newItem);
            state.total+=action.payload.item.price
     
           }

            
        },
        setLoading(state,action){
            state.loading=action.payload.loading
        },
        increment(state,action){
            state.total+=action.payload.price
            state.cartItems[action.payload.id].quantity++

        },
        decrement(state,action){
           if (state.cartItems[action.payload.id].quantity!==1) {
            state.total-=action.payload.price
            state.cartItems[action.payload.id].quantity--
           }

        },
        deleteFromCart(state,action){
           const newCartItems = state.cartItems.filter((e,i)=>{
                return e.id!==action.payload.id
            })
           
            state.total-=action.payload.price* state.cartItems[action.payload.index].quantity
            state.cartItems=newCartItems

        }
    }
})
export const   {setLoading,addToCart,increment,decrement,deleteFromCart}=cart.actions
export default cart