import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface GardenObject {
  areas: {
    frontyard: {
      beds: { color: {} | string; name: string; produce: string[] };
    };
    backyard: {
      beds: { color: {} | string; name: string; produce: string[] };
    };
  };
}

const initialState: GardenObject = {
  areas: {
    frontyard: {
      beds: { color: {}, name: 'a', produce: ['carrots', 'lettuce'] }
    },
    backyard: {
      beds: { color: {}, name: 'b', produce: ['tomatoes', 'onions'] }
    }
  }
};

const gardenSlice: Slice = createSlice({
  name: 'garden',
  initialState,
  reducers: {
    areaAdded: (state, action: PayloadAction<string>) => {
      state.areas[action.payload] = {
        beds: { color: {}, name: action.payload, produce: [''] }
      };
    }
  }
});

export const { areaAdded } = gardenSlice.actions;
export default gardenSlice.reducer;
