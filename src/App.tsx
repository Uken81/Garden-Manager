import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Areas from './components/areas/areas';
import Garden from './components/garden/garden';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Garden />} />
      <Route path="/areas" element={<Areas />} />
    </Routes>
  );
}

export default App;
