import { Dispatch, SetStateAction } from 'react';
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface GardenProps {
  selectedAreaText: string | null;
  setSelectedAreaText: Dispatch<SetStateAction<string | null>>;
  setAreaIsSelected: Dispatch<SetStateAction<boolean>>;
}

export interface AreasProps {
  setAreaIsSelected: Dispatch<SetStateAction<boolean>>;
  selectedAreaText: string | null;
  setSelectedAreaText: Dispatch<SetStateAction<string | null>>;
}

interface GardenState {
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
  areas: {
    frontyard: {
      name: 'Frontyard',
      beds: {
        A: {
          color: '',
          name: 'A',
          produce: ['carrots', 'lettuce']
        }
      }
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
        beds: {
          A: {
            color: {},
            name: 'A',
            produce: []
          }
        }
      };
    },
    bedAdded: (state, action: PayloadAction<string>) => {
      state.areas[action.payload].beds = {
        color: {},
        name: action.payload,
        produce: []
      };
    }
  }
});

export const { areaAdded, bedAdded } = gardenSlice.actions;
export default gardenSlice.reducer;
