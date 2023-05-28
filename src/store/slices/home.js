import { createSlice } from "@reduxjs/toolkit";

const home= createSlice({
    name:'homePage',
    initialState:{
        products:[],
        imgSlider:[],
        imgSliderLoading:true,
        categoryImg:[]
    },
    reducers:{
        setProducts(state,action){
            state.products=action.payload.products
        },
        setLoading(state,action){
         state.imgSliderLoading=action.payload.loading
        },
        setImgSlider(state,action){
         state.imgSlider=action.payload.images
        },
        setCategoryImg(state,action){
         state.categoryImg=action.payload.items
        },
    }
})

export const {setProducts,setLoading,setImgSlider,setCategoryImg} =home.actions
export default home