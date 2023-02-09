import React, { useEffect, useState } from "react";
import { RiMovie2Fill } from 'react-icons/ri'
import { TbChecklist } from 'react-icons/tb'
import { MdRateReview } from 'react-icons/md'
import MovieDisplay from './MovieDisplay';
import './Show.css'
const API_KEY = '2186c8fcda107afc8d4e5f502d9ebd25'




const Show = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState('');

// change id to ${movieId}//
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/89?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error));

      fetch(`https://api.themoviedb.org/3/movie/89/videos?api_key=${API_KEY}`)
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
      <div className="movie_img">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>

      <div className= "movie_description">
      <h1>{movie.original_title}</h1>
      <h3>{movie.overview}</h3>
      <br />
      <p>Genre: {movie.genre}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Language: {movie.original_language}</p>
      <p>Review: {movie.review}</p>
      <p>Rating: {movie.rating}</p>
      </div>
      <br />
      <a href={trailerUrl} target="_blank">
        <button> <RiMovie2Fill /> </button>
      </a>
       <button> <TbChecklist /> </button>
       <button> <MdRateReview /> </button>

      <div className= "more_movies">
      <MovieDisplay className="movie_display"/>
      </div>
    </div>
  );
  }


  



export default Show;
