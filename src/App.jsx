import './App.scss';
import Areas from './features/areas';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Garden Manager</h1>
      </div>
      <div className="main-container">
        <Areas />
      </div>
    </div>
  );
}

export default App;
