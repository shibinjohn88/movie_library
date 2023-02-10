import React, { useEffect, useState } from "react";
import './MovieDisplay.css'
const API_KEY = '2186c8fcda107afc8d4e5f502d9ebd25'

function MovieDisplay () {
    const [results, setResults] = useState([])
    useEffect (() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results)
                setResults(data.results)
            })
    }, [])

    const moviesList = results.map((movie, key) => {
        return (
            <div className="movie_poster" id={key}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie poster' className='poster' id={key}/>
                <h6 id={key}>Release Date:{movie.release_date}</h6>
            
                <button id={key} onClick={async (e) => {
                    const id = e.target.id
                    console.log(results[id].title)
                    try {     
                        const response = await fetch('http://localhost:3001/movies', {
                          method: 'post',
                          headers: {'content-type': 'application/json'},
                          body: JSON.stringify({
                            "original_title": results[id].original_title,
                            "poster_path": results[id].poster_path,
                            "release_date": results[id].release_date,
                            "original_language": results[id].original_language
                          })
                        });
                        console.log(response);
                      } catch(err) {
                        console.error(`Error: ${err}`);
                      }
                }}>Add to Movie Reviews</button>
                
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
            