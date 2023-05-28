import { createSlice } from "@reduxjs/toolkit";




 const account =createSlice({
    name:'account',
    initialState:{
        account:null,
        loading:false,
        isLogIn:false
    },
    reducers:{
    
        setAccount(state,action){
            state.loading=action.payload.loading
        },
      

   
    }
})
export const   {setAccount}=account.actions
export default account