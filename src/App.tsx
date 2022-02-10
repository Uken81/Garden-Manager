import { useSelector } from 'react-redux';
import './App.scss';
import { selectGardenObject } from './redux/selectors';
// import { GardenObject } from './redux/garden';
import Areas from './components/areas';
import { GardenObject } from './redux/garden';

function App() {
  const usersGarden: GardenObject = useSelector(selectGardenObject);
  // console.log('test: ', usersGarden.areas);

  const randomNumberGenerator = Math.floor(Math.random() * 16777215).toString(16);
  const randomBackgroundColor: string = `#${randomNumberGenerator}`;
  console.log('color', randomBackgroundColor);

  const backyardProduceList = usersGarden.areas.backyard.beds.produce;
  console.log(backyardProduceList);

  return (
    <div className="App">
      <div className="title">
        <h1>Garden Manager</h1>
      </div>
      {/* <div className="bed" style={{ backgroundColor: randomBackgroundColor }}>
        <h1>{usersGarden.areas.backyard.beds.name}</h1>
        <ul>
          {backyardProduceList.map((produce) => {
            return <li key={uniqid()}>{produce}</li>;
          })}
        </ul>
      </div> */}
      <div className="main-container">
        <Areas />
      </div>
    </div>
  );
}

export default App;
