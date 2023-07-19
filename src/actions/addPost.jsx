import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const AddNewPost = createAsyncThunk("newPost/AddNewPost", async (updatedPost) => {
    try {
   
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts",updatedPost);
  return response.data;
    } catch (error) {
        console.error(error.message);
    }
})

const newPostSlice = createSlice({
    name: "newPost",
    initialState: {
      loading: false,
      data: [],
      error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(AddNewPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddNewPost.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

      })
      .addCase(AddNewPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    },
  });
  

  export default newPostSlice.reducer;

 