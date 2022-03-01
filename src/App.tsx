import { useState } from 'react';
import './App.scss';
import Areas from './components/areas/areas';
import Garden from './components/garden/garden';

function App() {
  const [areaIsSelected, setAreaIsSelected] = useState(false);
  const [selectedAreaText, setSelectedAreaText] = useState('');

  return (
    <div className="App">
      <div className="title">
        <h1>Garden Manager</h1>
      </div>
      <div className="main-container">
        {!areaIsSelected && (
          <Garden
            setAreaIsSelected={setAreaIsSelected}
            selectedAreaText={selectedAreaText}
            setSelectedAreaText={setSelectedAreaText}
          />
        )}
        {areaIsSelected && (
          <Areas selectedAreaText={selectedAreaText} setSelectedAreaText={setSelectedAreaText} />
        )}
      </div>
    </div>
  );
}

export default App;
