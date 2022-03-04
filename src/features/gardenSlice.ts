import { Dispatch, SetStateAction } from 'react';
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface GardenProps {
  selectedAreaText: string;
  setSelectedAreaText: Dispatch<SetStateAction<string>>;
  setAreaIsSelected: Dispatch<SetStateAction<boolean>>;
}

interface GardenState {
  areas: {
    frontyard: {
      name: string;
      beds: Beds[];
    };
  };
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
  areas: {
    frontyard: {
      name: 'Frontyard',
      beds: [{ color: '', name: 'a', produce: ['carrots', 'lettuce'] }]
    }
  }
};

const gardenSlice: Slice = createSlice({
  name: 'garden',
  initialState,
  reducers: {
    areaAdded: (state, action: PayloadAction<string>) => {
      state.areas[action.payload] = {
        name: action.payload,
        beds: [{ color: {}, name: action.payload, produce: [] }]
      };
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

export const { areaAdded, bedAdded, areaSelected, logger } = gardenSlice.actions;
export default gardenSlice.reducer;
