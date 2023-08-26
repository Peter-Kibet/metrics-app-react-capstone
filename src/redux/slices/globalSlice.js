import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGlobalData } from '../../services/globalData'; // Import the service function

export const fetchGlobalDataAction = createAsyncThunk(
  'global/fetchGlobalData',
  async () => {
    const global = await fetchGlobalData(); // Use the service function
    return global;
  },
);

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    global: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlobalDataAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGlobalDataAction.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.global = action.payload;
      })
      .addCase(fetchGlobalDataAction.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default globalSlice.reducer;
