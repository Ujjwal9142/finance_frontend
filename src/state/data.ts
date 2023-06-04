import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monthlyRevenueExpensesData: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setMonthlyRevenueExpensesData: (state, action) => {
      state.monthlyRevenueExpensesData = action.payload.data;
    },
  },
});

export const { setMonthlyRevenueExpensesData } = dataSlice.actions;
export default dataSlice.reducer;
