import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPostComments = createAsyncThunk("PostComments/fetchPostComments", async (id) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return response.data;
    } catch (error) {
        console.error(error.message);
    }
})

const PostCommentsSlice = createSlice({
    name: "PostComments",
    initialState: {
      loading: false,
      data: [],
      error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchPostComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

      })
      .addCase(fetchPostComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    },
  });
  

  export default PostCommentsSlice.reducer;

 