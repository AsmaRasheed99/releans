import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPostDetails = createAsyncThunk("PostDetails/fetchPostDetails", async (id) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.data;
    } catch (error) {
        console.error(error.message);
    }
})

const PostDetailsSlice = createSlice({
    name: "PostDetails",
    initialState: {
      loading: false,
      data: [],
      error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchPostDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

      })
      .addCase(fetchPostDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    },
  });
  

  export default PostDetailsSlice.reducer;

 