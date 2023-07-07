import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  exchangeRates: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setExchangeRates: (state, action) => {
      state.exchangeRates = action.payload;
    },
  },
});

export const { setToken, setExchangeRates } = appSlice.actions;

export default appSlice.reducer;

