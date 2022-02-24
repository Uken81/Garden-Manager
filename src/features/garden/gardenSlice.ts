import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface GardenObject {
  areas: {
    frontyard: {
      name: string;
      beds: [
        { color: {}; name: 'a'; produce: string[] },
        { color: {}; name: 'b'; produce: string[] }
      ];
    };
    backyard: {
      name: string;
      beds: [{ color: {}; name: string; produce: string[] }];
    };
  };
}

const initialState: GardenObject = {
  areas: {
    frontyard: {
      name: 'frontyard',
      beds: [
        { color: {}, name: 'a', produce: ['carrots', 'lettuce'] },
        { color: {}, name: 'b', produce: ['cucumber', 'beans'] }
      ]
    },
    backyard: {
      name: 'backyard',
      beds: [{ color: {}, name: 'a', produce: ['tomatoes', 'onions'] }]
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
        beds: { color: {}, name: action.payload, produce: [] }
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

export const { areaAdded, bedAdded } = gardenSlice.actions;
export default gardenSlice.reducer;
