import { useSelector } from 'react-redux';
import './App.css';
import { selectGardenObject } from './redux/selectors';

function App() {
  const usersGarden = useSelector(selectGardenObject);
  console.log(usersGarden.frontYard);
  console.log('test: ', usersGarden.backYard.beds.color);

  return (
    <div className="App">
      <h1>Garden Manager</h1>
      <h1>{usersGarden.backYard.beds.name}</h1>
    </div>
  );
}

export default App;
