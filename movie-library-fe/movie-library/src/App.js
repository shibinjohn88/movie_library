import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Show from './components/show';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReviewMovie } from './components/ReviewMovie';
import EditReview from './components/EditReview';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/show/:id" element={<Show/>} />
          <Route path="/showreviews/:movie_id" element={< ReviewMovie />} />
          <Route path="/editreviews/:review_id" element={< EditReview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;





