import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAlbums = createAsyncThunk("Albums/fetchAlbums", async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
  return response.data;
    } catch (error) {
        console.error(error.message);
    }
})

const AlbumsSlice = createSlice({
    name: "Albums",
    initialState: {
      loading: false,
      data: [],
      error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchAlbums.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    },
  });
  

  export default AlbumsSlice.reducer;

 