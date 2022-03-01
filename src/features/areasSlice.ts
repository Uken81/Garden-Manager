import { createSlice, Slice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch, SetStateAction } from 'react';
export interface AppProps {
  setAreaIsSelected: Dispatch<SetStateAction<boolean>>;
  selectedAreaText: string;
  setSelectedAreaText: Dispatch<SetStateAction<string>>;
}

interface areaState {
  selectedArea: Object;
}
const initialState: areaState = {
  selectedArea: {}
};

const areasSlice: Slice = createSlice({
  name: 'areas',
  initialState,
  reducers: {
    areaSelected: (state, action: PayloadAction<areaState>) => {
      state.selectedArea.value = action.payload;
    }
  }
});

export const { areaSelected } = areasSlice.actions;
export default areasSlice.reducer;
