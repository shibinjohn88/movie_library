import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Show from './components/Show';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/show" element={<Show/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



