import React, { useEffect, useState } from "react";
import './MovieDisplay.css';



const API_KEY = process.env.REACT_APP_API_KEY

function MovieDisplay () {
    const [results, setResults] = useState([])
    useEffect (() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.results)
                setResults(data.results)
            })
    }, [])
    const moviesList = results.map((movie, key) => {
        return (
          
            <div className="movie_poster" key={key}>
                
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie poster' className='poster'/>
                <h6>Release Date:{movie.release_date}</h6>
            
                <button id={key} onClick={async (e) => {
                    const id = e.target.id
                    console.log(results[id].title)
                    try {     
                        const response = await fetch('api/movies', {
                          method: 'post',
                          headers: {'content-type': 'application/json'},
                          body: JSON.stringify({
                            "original_title": results[id].original_title,
                            "poster_path": results[id].poster_path,
                            "release_date": results[id].release_date,
                            "original_language": results[id].original_language,
                            "overview": results[id].overview
                          })
                        });
                        window.location.replace(`/watchlist`)
                      } catch(err) {
                        console.error(`Error: ${err}`);
                      }
                }}>Add to Watchlist</button>
                <button id={key} onClick={async (e) => {
                    const id = e.target.id
                    window.location.replace(`/show/${results[id].id}`)(results[id].id)
                }}>Show</button>
                
            </div>
            )
       })
    
    return (
        <div className="movie_display">
            {moviesList}
        </div>
        
    )
}

export default MovieDisplay