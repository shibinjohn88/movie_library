import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Show from './components/show.jsx';
import AddMovie from './components/AddMovie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/show" element={<Show/>} />
          <Route path="/addmovie" element={<AddMovie/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



