import React, { useEffect, useState } from "react";
import { RiMovie2Fill } from 'react-icons/ri'
import { TbChecklist } from 'react-icons/tb'
import { MdRateReview } from 'react-icons/md'
import { useParams } from "react-router-dom";
import MovieDisplay from './MovieDisplay';
import logo1 from './logo.png';
import './Show.css'
const API_KEY = '2186c8fcda107afc8d4e5f502d9ebd25'




const Show = () => {
  const [movieId,setMovieId] = useState(); 
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState('');
  const {id} = useParams ();
  const [results, setResults] = useState([]);

useEffect(() => {


    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error));

      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (data.results.length > 0) {
          setTrailerUrl(`https://www.youtube.com/watch?v=${data.results[0].key}`);
        }
      })
      .catch(error => console.error(error));
  }, [movieId]);
  

  return (
    <div className= "movie_container">
      
      <div className="movie_poster">
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
    className="movie_img" alt={movie.title} />
          <br />
      <a href={trailerUrl} target="_blank">
        <button> <RiMovie2Fill /> Watch Trailer</button>
      </a>
   
      <button onClick={async () => {
  try {     
    const response = await fetch('http://localhost:3001/movies', {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        "original_title": movie.original_title,
        "poster_path": movie.poster_path,
        "release_date": movie.release_date,
        "original_language": movie.original_language
      })
    });
    console.log(response);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
}}>Add To Watch List</button>

       <br />
       <button> <MdRateReview /> Leave a Review</button>
       </div>
        <div className= "movie_description">
    <h1>{movie.original_title}</h1>
      <h3>Overview:</h3>
        <p>{movie.overview}</p>
        <hr />
        <div className= "movie_info">
      <h3>Release Date:</h3>
        <p>{movie.release_date}</p>
      <h3>Popularity:</h3>
        <p>{movie.popularity}</p>
      <h3>Vote Average:</h3>
        <p>{movie.vote_average}</p>
      <h3>Cast:</h3> 
        <p>{movie.cast && movie.cast.length > 0
            ? movie.cast.map((actor, index) => (
             <span key={index}>{actor}</span>))
             : "Not available"}</p>
      <h3>Language:</h3>
         <p>{movie.original_language}</p>
     
         <hr />
         <div class="logo-row">
  <img src={logo1} class="logo-image" />
  <img src={logo1} class="logo-image" />
  <img src={logo1} class="logo-image" />
  <img src={logo1} class="logo-image" />
  <img src={logo1} class="logo-image" />
  <img src={logo1} class="logo-image" />
</div>
         </div>
     
     
       </div>
       <div className="movie_display">
     <MovieDisplay />
     </div>
    </div>
     
   
  );
  }

  



export default Show;







