import { Dispatch, SetStateAction } from 'react';
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface GardenProps {
  setAreaIsSelected: Dispatch<SetStateAction<boolean>>;
  selectedAreaText: string;
  setSelectedAreaText: Dispatch<SetStateAction<string>>;
}

interface GardenState {
  areas: Area[];
}

export interface Area {
  name: string;
  beds: Beds[];
}

interface Beds {
  name: string;
  color: string;
  produce: string[];
}

const initialState: GardenState = {
  areas: [{ name: 'Backyard', beds: [{ name: 'a', color: '', produce: ['carorts', 'onions'] }] }]
};

const gardenSlice: Slice = createSlice({
  name: 'garden',
  initialState,
  reducers: {
    areaAdded: (state, action: PayloadAction<string>) => {
      state.areas.push({
        name: action.payload,
        beds: { color: {}, name: action.payload, produce: [] }
      });
    },
    bedAdded: (state, action: PayloadAction<string>) => {
      state.areas.frontyard.beds.push({
        color: {},
        name: action.payload,
        produce: []
      });
    }
  }
});

export const { areaAdded, bedAdded } = gardenSlice.actions;
export default gardenSlice.reducer;
