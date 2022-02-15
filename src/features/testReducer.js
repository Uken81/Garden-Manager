const initialState = {
  name: ''
};

export default function nameReducer(state = initialState, action) {
  switch (action.type) {
    case 'name/nameAdded': {
      return {
        ...state,
        name: action.payload
      };
    }
    default:
      return state;
  }
}

// console.log(appReducer);
// {
//   type: 'name/nameAdded', payload: nameText
// }
