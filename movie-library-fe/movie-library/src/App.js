import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Show from './components/show';
import MovieList from './components/MovieList';
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
          <Route path="/MovieList" element={<MovieList/>} />
          <Route path="/show/:id" element={<Show/>} />
<<<<<<< HEAD
          <Route path="/showreviews/:movie_id" element={< ReviewMovie />} />
          <Route path="/editreviews/:review_id" element={< EditReview />} />
          <Route path='/watchlist'element={<WatchlistDisplay />} />
=======
          <Route path='/watchlist' element={<WatchlistDisplay />} />
>>>>>>> 650f69aea99c3f9b6b985356b395bc0db67b405b
          <Route path='/writereview/:id' element={<WriteReview/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;





