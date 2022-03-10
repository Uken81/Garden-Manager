import { useState } from 'react';
import './App.scss';
import Areas from './components/areas/areas';
import BedMangement from './components/bedManagement/bedManagement';
import Garden from './components/garden/garden';

function App() {
  const [areaIsSelected, setAreaIsSelected] = useState<boolean>(false);
  const [showBedManagement, setShowBedManagement] = useState<boolean>(false);
  const [selectedBed, setSelectedBed] = useState<string>('');

  return (
    <div className="App">
      <div className="title">
        <h1>Garden Manager</h1>
      </div>
      <div className="main-container">
        {!areaIsSelected && <Garden setAreaIsSelected={setAreaIsSelected} />}
        {areaIsSelected && (
          <Areas
            setAreaIsSelected={setAreaIsSelected}
            setShowBedManagement={setShowBedManagement}
            setSelectedBed={setSelectedBed}
          />
        )}
        {showBedManagement && <BedMangement selectedBed={selectedBed} />}
      </div>
    </div>
  );
}

export default App;
