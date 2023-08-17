import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddMovie from './pages/AddMovie';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
    </>
  );
}

export default App;
