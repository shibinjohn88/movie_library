import React, { useEffect, useState } from "react";
import MovieDisplay from './MovieDisplay';
import './Show.css'
const API_KEY = '2186c8fcda107afc8d4e5f502d9ebd25'



const Show = ({ movieId }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/8?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <div className= "movie_container">
      <div className="movie_img">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>

      <div className= "movie_description">
      <h1>{movie.original_title}</h1>
      <br />
      <h3>{movie.overview}</h3>
      <br />
      <p>Genre: {movie.genre}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Language: {movie.original_language}</p>
      <p>Review: {movie.review}</p>
      <p>Rating: {movie.rating}</p>
      </div>
      <button> Watch Traitler</button>
       <button> Add To Watch List </button>
       <button> Leave a Review </button>

      <div className= "more_movies">
      <MovieDisplay className="movie_display"/>
      </div>
    </div>
  );
  }


  



export default Show;
