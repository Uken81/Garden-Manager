import { AnyAction } from 'redux';

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

const InitialState: GardenObject = {
  areas: {
    frontyard: {
      beds: { color: {}, name: 'a', produce: ['carrots', 'lettuce'] }
    },
    backyard: {
      beds: { color: {}, name: 'b', produce: ['tomatoes', 'onions'] }
    }
  }
};

export const gardenReducer = (state: GardenObject = InitialState, action: { type: AnyAction }) => {
  switch (action.type) {
    default:
      return state;
  }
};
