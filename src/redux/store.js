import { configureStore } from "@reduxjs/toolkit";
import metricsReducer from "./reducers/metricsReducer";
// Import other reducers here

const rootReducer = combineReducers({
  metrics: metricsReducer,
  // Other reducers here
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
