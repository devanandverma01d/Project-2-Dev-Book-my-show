import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../helpers/url_helper";



const initialState = {
    movies : [{
        image:"",
        name:""
    }],
    loading:false
}

export const getMovies = createAsyncThunk(
    "getAllMovies",
    async()=>{
        const res = await fetch (`${URL}/api/movies?populate=*`)
        const data = await res.json()
        console.log("movies ----->", data)
        const newData = data?.data?.map((cv)=>({
            image:URL+cv.attributes.image_thumb.data.attributes.url            ,
            name:cv.attributes.name
        }))
        console.log("newData ----->", newData)
        return newData
    }
)


export const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getMovies.pending, (state)=>{
            state.loading = true
        })
        .addCase(getMovies.fulfilled, (state,action)=>{
            state.loading = false
            state.movies = action.payload
        })    }
})


export default movieSlice.reducer