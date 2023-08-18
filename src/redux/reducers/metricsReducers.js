import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk action creator for fetching financial data
export const fetchFinancialData = createAsyncThunk(
  "financialData/fetchFinancialData",
  async () => {
    const response = await axios.get("/api/financial-data");
    return response.data;
  }
);

// Define a slice of state for financial data
const financialDataSlice = createSlice({
  name: "financialData",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // Define any synchronous reducers here
  },
  extraReducers: {
    // Handle the async thunk actions here
    [fetchFinancialData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchFinancialData.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [fetchFinancialData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

// Export the reducer function and any synchronous action creators
export const financialDataReducer = financialDataSlice.reducer;
export const {} = financialDataSlice.actions;
