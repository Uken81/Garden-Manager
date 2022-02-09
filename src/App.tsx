import { useSelector } from 'react-redux';
import './App.css';
import { selectGardenObject } from './redux/selectors';

function App() {
  const usersGarden = useSelector(selectGardenObject);
  console.log('test: ', usersGarden);

  const randomBackgroundColor = usersGarden.color.randomColor;
  console.log('color', randomBackgroundColor);

  const produceList = usersGarden.produce;
  console.log(produceList);

  return (
    <div className="App">
      <h1>Garden Manager</h1>
      <div className="bed" style={{ backgroundColor: randomBackgroundColor }}>
        <h1>{usersGarden.name}</h1>
        <ul>
          {produceList.map((produce: string) => {
            return <li key={produce}>{produce}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
