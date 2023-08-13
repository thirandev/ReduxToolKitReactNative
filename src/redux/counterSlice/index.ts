import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    clearState: state => {
      state.value = initialState.value;
    },
  },
});

export const {increment, decrement, incrementByAmount, clearState} =
  counterSlice.actions;

export default counterSlice.reducer;
