import React, { useEffect, useState } from "react";
import './FavouritesDisplay.css'

function FavouritesDisplay () {
    const [favourites, setFavourites] = useState([])
    useEffect ( () => {
        fetch(`http://localhost:3001/movies`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setFavourites(data)
            })
    }, [])

    const moviesList = favourites.map((movie, key) => {
        return (
            <div className="movie_poster" id={key}>
                <div className="poster_button">
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie poster' className='poster' id={key}/>
                    <h6 id={key}>Release Date:{movie.release_date}</h6>
                    <button id={key}>Edit</button>
                    <button id={key}>Delete</button> 
                </div>
                <div className="details">
                    <h3>Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.</h3>
                    <h3>Review: {movie.review ? movie.review : 'NA'}</h3>
                    <h3>Rating: {movie.rating ? movie.rating : 'NA'}</h3>
                </div>
                   
            </div>
            )
       })
    
    return (
        <div className="favourites_Display">
            {moviesList}
        </div>
    )
}



export default FavouritesDisplay