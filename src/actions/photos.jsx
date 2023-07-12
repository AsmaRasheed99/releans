import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPhotos = createAsyncThunk("Photos/fetchPhotos", async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
  return response.data;
    } catch (error) {
        console.error(error.message);
    }
})

const PhotosSlice = createSlice({
    name: "Photos",
    initialState: {
      loading: false,
      data: [],
      error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    },
  });
  

  export default PhotosSlice.reducer;

 