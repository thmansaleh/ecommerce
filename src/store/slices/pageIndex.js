import { createSlice } from "@reduxjs/toolkit";

const page = createSlice({
    name:'page',
    initialState:{page:'home'},
    reducers:{
        setPage(state,action){
            state.page=action.payload.page
        }
    }
})

export const pageActions =page.actions
export default page