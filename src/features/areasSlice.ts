import { Dispatch, SetStateAction } from 'react';
import { createSlice, Slice, PayloadAction } from '@reduxjs/toolkit';
import { Area } from './gardenSlice';

export interface AreasProps {
  setAreaIsSelected: Dispatch<SetStateAction<boolean>>;
  selectedAreaText: string;
}

export interface AreaState {}
const initialState = {};

const areasSlice: Slice = createSlice({
  name: 'areas',
  initialState,
  reducers: {
    areaSelected: (state, action: PayloadAction<Area>) => {
      state.selectedAreaObject = action.payload;
    }
  }
});

export const { areaSelected } = areasSlice.actions;
export default areasSlice.reducer;
