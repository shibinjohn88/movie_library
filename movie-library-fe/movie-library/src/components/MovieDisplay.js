import React, { useEffect, useState } from "react";
import './MovieDisplay.css';
import { Link, } from 'react-router-dom'; /*added*/

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
                 {/* added */}
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie poster' className='poster' id={key} />
                <h5 id={key}>Release Date:{movie.release_date}</h5>
            
                <button id={key} onClick={async (e) => {
                    const id = e.target.id
                    console.log(results[id].title)
                  
                }}>Add to Favourites</button>
                <button id={key} onClick={async (e) => {
                    const id = e.target.id
                    window.location.replace(`http://localhost:3000/show/${results[id].id}`)(results[id].id)
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
