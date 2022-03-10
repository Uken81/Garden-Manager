import { Dispatch, SetStateAction } from 'react';
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export type AppProps = {
  setAreaIsSelected: Dispatch<SetStateAction<boolean>>;
};

interface GardenState {
  selectedAreaName: string;
  areas: {
    frontyard: {
      name: string;
      beds: {};
    };
  };
}

export interface Area {
  name: string;
  beds: Beds;
}

export interface Beds {
  name: string;
  color: string;
  produce: string[];
}

const initialState: GardenState = {
  selectedAreaName: '',
  areas: {
    frontyard: {
      name: 'frontyard',
      beds: {
        a: {
          color: '',
          name: 'a',
          produce: ['carrots', 'lettuce']
        },
        b: {
          color: '',
          name: 'b',
          produce: ['onion', 'tomatoe']
        }
      }
    }
  }
};

const gardenSlice: Slice = createSlice({
  name: 'garden',
  initialState,
  reducers: {
    areaSelected: (state, action: PayloadAction<string>) => {
      state.selectedAreaName = action.payload;
    },
    areaAdded: (state, action: PayloadAction<string>) => {
      state.areas[action.payload] = {
        name: action.payload,
        beds: {
          a: {
            color: {},
            name: 'a',
            produce: []
          }
        }
      };
    },
    bedAdded: (state, action: PayloadAction<string>) => {
      state.areas[state.selectedAreaName].beds[action.payload] = {
        color: {},
        name: action.payload,
        produce: []
      };
    }
  }
});

export const { areaSelected, areaAdded, bedAdded } = gardenSlice.actions;
export default gardenSlice.reducer;
