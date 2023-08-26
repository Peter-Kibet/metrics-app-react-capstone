import { configureStore } from '@reduxjs/toolkit';
import coinsReducer, { fetchCoinsAction } from './slices/coinSlice';
import globalReducer, { fetchGlobalDataAction } from './slices/globalSlice';
import singleCoinReducer, {
  fetchSingleCoinAction,
} from './slices/singleCoinSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
    global: globalReducer,
    singleCoin: singleCoinReducer,
  },
});

store.dispatch(fetchCoinsAction());
store.dispatch(fetchGlobalDataAction());

export default store;
