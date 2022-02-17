// import { createSlice, Slice } from '@reduxjs/toolkit';

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

export const addUserArea = (area: any) => {
  return {
    type: 'newArea/newAreaAdded',
    payload: [area]
  };
};

export const gardenReducer = (state: GardenObject = initialState, action: any) => {
  switch (action.type) {
    case 'area/areaAdded': {
      return {
        ...state,
        areas: action.payload
      };
    }
    case 'newArea/newAreaAdded': {
      return {
        areas: { ...state.areas, [action.payload]: { beds: { color: {}, name: '', produce: [] } } }
      };
    }
    default:
      return state;
  }
};

// const gardenSlice: Slice = createSlice({
//   name: 'garden',
//   initialState,
//   reducers: {
//     areaAdded(state, action) {
//       const area = action.payload;
//       state.entities[area.id] = area;
//     }
//   }
// });

// export const { areaAdded } = gardenSlice.actions;
// export default gardenSlice.reducer;
