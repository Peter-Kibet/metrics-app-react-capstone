import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFinancialData = createAsyncThunk(
  "financialData/fetchFinancialData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/api/v3/financial-statement-symbol-lists?apikey=${process.env.REACT_APP_API_KEY}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
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
      state.error = action.payload;
    },
  },
});

export const financialDataReducer = financialDataSlice.reducer;
export default financialDataSlice.actions;
