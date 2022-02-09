import { AnyAction, createStore } from 'redux';

const randomNumberGenerator = Math.floor(Math.random() * 16777215).toString(16);
const randomColor: string = `#${randomNumberGenerator}`;

interface Garden {
  backYard: {
    name: string;
    color: any | string;
    produce: string[];
  };
}

const UsersGarden: Garden = {
  backYard: {
    name: 'Bed 1',
    color: { randomColor },
    produce: ['carrots', 'beans', 'lettuce']
  }
};

// interface Test {
//     areas: {
//         frontyard: {

//         }
//     }
// }

const testObject = {
  areas: {
    frontyard: {
      beds: [{ produce: [] }]
    },
    backyard: {
      beds: [{ produce: [] }]
    }
  }
};

console.log('TO: ', testObject);

const reducer = (state: Garden = UsersGarden, action: { type: AnyAction }) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
