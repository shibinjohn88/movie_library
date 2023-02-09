import React, { useEffect, useState } from "react";
import './MovieDisplay.css'
const API_KEY = '2186c8fcda107afc8d4e5f502d9ebd25'

function MovieDisplay () {
    const [results, setResults] = useState([]);

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
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie poster' className='poster' id={key} />

                <h6 id={key}>Release Date:{movie.release_date}</h6>
            
                <button id={key} onClick={(e) => {
                    const id = e.target.id
                    console.log(results[id].title)
<<<<<<< HEAD
                }}<butt>Add to My Favorites</butt>
=======
                }}>Add to Movie Reviews</button>
>>>>>>> e81a5b0739117d9b1275a25ecf03c0f232eb2808
                
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