import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Show from './components/show';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReviewMovie } from './components/ReviewMovie';
import EditReview from './components/EditReview';
import WatchlistDisplay from './components/WatchlistDisplay';
import WriteReview from './components/WriteReview';
import SearchMovieList from './components/SearchMovieList.js';
import SearchMovies from './components/SearchMovies.js';

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
          <Route path="/showreviews/:movie_id" element={< ReviewMovie />} />
          <Route path="/editreviews/:review_id" element={< EditReview />} />
          <Route path='/watchlist' element={<WatchlistDisplay />} />
          <Route path='/writereview/:id' element={<WriteReview/>}/>
          <Route path="/searchmovies" element= {<SearchMovies />} />
          <Route path="/searchmovielist"  element= {<SearchMovieList /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;





