import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchComments = createAsyncThunk("Comments/fetchComments", async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
  return response.data;
    } catch (error) {
        console.error(error.message);
    }
})

const CommentsSlice = createSlice({
    name: "Comments",
    initialState: {
      loading: false,
      data: [],
      error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    },
  });
  

  export default CommentsSlice.reducer;

 