import './App.scss';
import Areas from './components/areas';
import store from './redux/store';

function App() {
  // const dispatchResult = store.dispatch({ type: 'name/nameAdded' });
  // console.log(dispatchResult);

  store.dispatch({ type: 'name/nameAdded', payload: 'Brendan' });
  return (
    <div className="App">
      <div className="title">
        <h1>Garden Manager</h1>
      </div>
      <Areas />
      {/* <div className="bed" style={{ backgroundColor: randomBackgroundColor }}>
        <h1>{usersGarden.areas.backyard.beds.name}</h1>
        <ul>
          {backyardProduceList.map((produce) => {
            return <li key={uniqid()}>{produce}</li>;
          })}
        </ul>
      </div> */}
      <div className="main-container"></div>
    </div>
  );
}

export default App;
