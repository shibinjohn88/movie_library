import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Show from './components/show';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WatchlistDisplay from './components/WatchlistDisplay';
import WriteReview from './components/WriteReview';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br />
      <br />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/show/:id" element={<Show/>} />
          <Route path='/watchlist' element={<WatchlistDisplay />} />
          <Route path='/writereview/:id' element={<WriteReview/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;





