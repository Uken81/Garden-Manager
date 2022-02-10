import { AnyAction } from 'redux';

const selectedArea: string = '';

export const selectedAreaReducer = (state: string = selectedArea, action: { type: AnyAction }) => {
  switch (action.type) {
    case action.type:
      return console.log('action test');
    default:
      return state;
  }
};
