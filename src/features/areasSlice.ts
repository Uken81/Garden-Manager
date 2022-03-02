import { Dispatch, SetStateAction } from 'react';
import { createSlice, Slice, PayloadAction } from '@reduxjs/toolkit';

export interface AreasProps {
  areaIsSelected: boolean;
  setAreaIsSelected: Dispatch<SetStateAction<boolean>>;
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
