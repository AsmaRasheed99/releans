import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts = createAsyncThunk("Posts/fetchPosts", async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
    } catch (error) {
        console.error(error.message);
    }
})

const PostsSlice = createSlice({
    name: "Posts",
    initialState: {
      loading: false,
      data: [],
      error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    },
  });
  

  export default PostsSlice.reducer;

 