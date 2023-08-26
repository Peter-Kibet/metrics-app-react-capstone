import { configureStore } from "@reduxjs/toolkit";
import coinsReducer, { fetchCoinsAction } from "./slices/coinSlice";
import singleCoinReducer from "./slices/singleCoinSlice";

const store = configureStore({
  reducer: {
    coins: coinsReducer,
    singleCoin: singleCoinReducer,
  },
});

store.dispatch(fetchCoinsAction());

export default store;
