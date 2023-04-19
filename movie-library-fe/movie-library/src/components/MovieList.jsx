import React, { useState, useEffect } from 'react';
import './MovieList.css';
import logo1 from './logo.png';


const API_KEY = process.env.REACT_APP_API_KEY

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch the list of movies
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        const genres = data.genres;
        const allMovies = [];

        // Loop through each genre 
        genres.forEach(genre => {
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genre.id}&page=1`)
            .then(response => response.json())
            .then(data => {
              const movies = data.results;
              allMovies.push(...movies);

      
              setMovies(allMovies);
            });
        });
      });
  }, []);

  return (
    <div className='moviesContainer'>
          <hr />
         <div class="logo-row1">
  <img src={logo1} className="logo1-image" />
  <img src={logo1} className="logo1-image" />
  <img src={logo1} className="logo1-image" />
  <img src={logo1} className="logo1-image" />
  <img src={logo1} className="logo1-image" />
  <img src={logo1} className="logo1-image" />
</div>
<hr />
      <h1>List of Movies</h1>
   
      {movies.map(movie => (
        <div>
          <a href={`/show/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie poster' className='poster'/>
          </a>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        
        </div>
      ))}
    </div>
  );
}

export default MovieList;
