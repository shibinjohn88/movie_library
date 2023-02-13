import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Show from './components/show.jsx';
import AddMovie from './components/AddMovie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavouritesDisplay from './components/FavouritesDisplay';
import EditReview from './components/EditReview';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/show" element={<Show/>} />
          <Route path="/addmovie" element={<AddMovie/>} />
          <Route path='/favourites' element={<FavouritesDisplay/>}/>
          <Route path='/editreview/:id' element={<EditReview/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;





