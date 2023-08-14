import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-movie" element={<Movie />} />
      </Routes>
    </>
  );
}

export default App;
