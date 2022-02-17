const initialState = {
  areaName: ''
};

export default function areaReducer(state = initialState, action) {
  switch (action.type) {
    case 'test/testAction': {
      return {
        ...state,
        areaName: action.payload
      };
    }
    default:
      return state;
  }
}
