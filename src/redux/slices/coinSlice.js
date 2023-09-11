import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchCoins from '../../services/fetchCoins';

export const fetchCoinsAction = createAsyncThunk(
  'coins/fetchCoins',
  async () => {
    const coins = await fetchCoins();
    return coins;
  },
);

const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    coins: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinsAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCoinsAction.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coins = action.payload;
      })
      .addCase(fetchCoinsAction.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default coinsSlice.reducer;
