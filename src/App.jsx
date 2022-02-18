import './App.scss';
import Garden from './features/garden/garden';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Garden Manager</h1>
      </div>
      <div className="main-container">
        <Garden />
      </div>
    </div>
  );
}

export default App;
