import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsersData = createAsyncThunk("usersData/fetchUsersData", async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
    } catch (error) {
        console.error(error.message);
    }
})

const usersDataSlice = createSlice({
    name: "usersData",
    initialState: {
      loading: false,
      data: [],
      error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchUsersData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

      })
      .addCase(fetchUsersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    },
  });
  

  export default usersDataSlice.reducer;

 