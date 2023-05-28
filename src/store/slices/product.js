import { createSlice } from "@reduxjs/toolkit";




 const products =createSlice({
    name:'products',
    initialState:{
        product:null,
        loading:true,
     
    },
    reducers:{
     
        setProduct(state,action){
            state.product=action.payload.product
        },
        setLoading(state,action){
            state.loading=action.payload.loading
        }
    }
})
export const   {setLoading,setProduct}=products.actions
export default products