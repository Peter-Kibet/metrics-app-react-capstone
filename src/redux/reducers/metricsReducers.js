import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFinancialData = createAsyncThunk(
  "financialData/fetchFinancialData",
  async () => {
    const response = await axios.get("/api/financial-data");
    return response.data;
  }
);

const financialDataSlice = createSlice({
  name: "financialData",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
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

export const financialDataReducer = financialDataSlice.reducer;
export const {} = financialDataSlice.actions;
