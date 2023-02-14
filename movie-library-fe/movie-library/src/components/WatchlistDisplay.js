import React, { useEffect, useState } from "react";
// import './Watchlist.css'

export default function WatchlistDisplay() {
    const [Watchlist, setWatchlist] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/movies`)
        .then((response) => 
        response.json())
        .then((data) => {
            setWatchlist(data)
        })
    }, [])

    const movieList = Watchlist.map((movie, key) => {
        return(
            <div className="movie_poster_favourites" id={key}>
                <div className="poster_button">
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie poster' className='poster_watchlist' id={key}/>
                    <h6 id={key}>Release Date:{movie.release_date}</h6>
                    
                </div>
                <div className="details">
                    <h3 className="details_text">{movie.overwiew}</h3>
                    <h3 className="details_text">Review: {movie.review ? movie.review : 'NA'}</h3>
                    <h3 className="details_text">Rating: {movie.rating ? movie.rating : 'NA'}</h3>
                    <button id={key} className='details_edit' onClick={(event) => {
                        const id = event.target.id
                        window.location.replace(`http://localhost:3000/editreview/${Watchlist[id]._id}`)
                        console.log('button clicked')
                    }}>Edit</button>
                    <button id={key} className='details_delete' onClick={async (event) => {
                        const id = event.target.id
                        try {     
                            const response = await fetch(`http://localhost:3001/movies/${Watchlist[id]._id}`, {
                              method: 'delete'}
                              )
                            window.location.reload(false)
                          } catch(err) {
                            console.error(`Error: ${err}`)
                          }
                    }
                     }>Delete</button> 
                </div>
                   
            </div>
        )
    })
    return(
        <div className="watchlist-display">
            { movieList }
        </div>
    )
}