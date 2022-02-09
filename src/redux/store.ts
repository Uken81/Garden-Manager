import { createStore } from 'redux';

const randomColorGenerator = Math.floor(Math.random() * 16777215).toString(16);
const randomColor = `#${randomColorGenerator}`;

const initialState = {
  areas: {
    frontYard: {
      beds: [
        {
          name: '1',
          color: { randomColor },
          produce: ['beans']
        },
        {
          name: '2',
          color: { randomColor },
          produce: ['tomatoes', 'cherry tomatoes', 'spring onion']
        }
      ]
    },
    backYard: {
      beds: {
        name: '1',
        color: { randomColor },
        produce: ['carrots', 'lebanese cucumbers']
      }
    }
  }
};

const reducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    default:
      return state;
  }
};

console.log('test: ', initialState.areas.frontYard);

const store = createStore(reducer);

export default store;
