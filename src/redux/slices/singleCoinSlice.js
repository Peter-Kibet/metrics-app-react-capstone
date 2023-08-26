import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchSingleCoin from '../../services/fetchCoin';

export const fetchSingleCoinAction = createAsyncThunk(
  'singleCoin/fetchSingleCoin',
  async (coinId) => {
    const coin = await fetchSingleCoin(coinId);
    return coin;
  },
);

const singleCoinSlice = createSlice({
  name: 'singleCoin',
  initialState: {
    coindata: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCoinAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSingleCoinAction.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coindata = action.payload;
      })
      .addCase(fetchSingleCoinAction.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default singleCoinSlice.reducer;
