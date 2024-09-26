// src/features/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: string; // Explicitly define the type of 'value'
}

const initialState: CounterState = {
  value: 'Hoodies', // Initial value is a string
};

const counterSlice = createSlice({
  name: 'ChangeContent',
  initialState,
  reducers: {
    setStateValue(state) {
      state.value = 'Product'; // Properly typed as string
    },
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload; 
    },
  },
});

export const { setStateValue, setValue } = counterSlice.actions;
export default counterSlice.reducer;
