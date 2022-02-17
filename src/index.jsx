import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { selectArea } from './redux/selectors';

console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(() => console.log('State after dispatch: ', store.getState()));
console.log(selectArea);
unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
