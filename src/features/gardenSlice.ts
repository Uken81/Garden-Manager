import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

// export interface GardenObject {
//   areas: {
//     frontyard: {
//       name: string;
//       beds: { color: {}; name: string; produce: string[] }[];
//     };
//     backyard: {
//       name: string;
//       beds: { color: {}; name: string; produce: string[] }[];
//     };
//   };
// }

// const initialState: GardenObject = {
//   areas: {
//     frontyard: {
//       name: 'frontyard',
//       beds: [{ color: {}, name: 'a', produce: ['carrots', 'lettuce'] }]
//     },
//     backyard: {
//       name: 'backyard',
//       beds: [{ color: {}, name: 'a', produce: ['tomatoes', 'onions'] }]
//     }
//   }
// };

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
