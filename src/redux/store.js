import { configureStore } from "@reduxjs/toolkit";
import financialDataReducer from "./reducers/financialDataSlice"; // Update the path as needed

const store = configureStore({
  reducer: {
    financialData: financialDataReducer,
    // Add other reducers here if needed
  },
});

export default store;
