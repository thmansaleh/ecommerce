import { createSlice } from "@reduxjs/toolkit";




 const sections =createSlice({
    name:'sections',
    initialState:{
        items:[],
        loading:true
    },
    reducers:{
        setItems(state,action){
            state.items.push(...action.payload.items)
        },
        setLoading(state,action){
            state.loading=action.payload.loading
        }
    }
})
export const   {setItems,setLoading}=sections.actions
export default sections