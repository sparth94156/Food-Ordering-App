import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

// Action
export const fetchData = createAsyncThunk('fetchData', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return response.json();
})

const userSlice = createSlice({
    name: 'user',
    initialState : {
        isloading: false,
        data: null,
        isError: false
    },
    extraReducers : (builder) => {
        builder.addCase(fetchData.fulfilled, (state,action) => {
            state.isloading = false;
            state.data = action.payload;
        }),
        builder.addCase(fetchData.pending, (state,action) => {
            state.isloading = true;
        }),
        builder.addCase(fetchData.rejected, (state,action) => {
            state.isloading = false;
            state.isError = true;
            console.log("Error: " + action.payload)
        })
    }
})

export default userSlice.reducer;