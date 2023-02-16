import React, { useEffect, useState } from "react";
import style from './WatchlistDisplay.css'

export default function WatchlistDisplay() {
    const [Watchlist, setWatchlist] = useState([])

    useEffect(() => {
        fetch(`/api/movies`)
        .then((response) => 
        response.json())
        .then((data) => {
            setWatchlist(data)
        })
    }, [])

    
    const movieList = Watchlist.map((movie, key) => {
        return(
            <div className="individual-movie">
                <div className="movie_poster_favourites" id={key}>
                    <div className="poster_button">
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie poster' className='poster_watchlist' id={key}/>
                        <h6 id={key}>Release Date: {movie.release_date}</h6>
                        <button id={key} className='details_edit' onClick={(event) => {
                            const id = event.target.id
                            window.location.replace(`/writereview/${Watchlist[id]._id}`)
                            console.log('button clicked')
                        }}>Edit</button>
                        <button id={key} className='details_delete' onClick={async (event) => {
                                const id = event.target.id
                                try {     
                                    const response = await fetch(`api/movies/${Watchlist[id]._id}`, {
                                    method: 'delete'}
                                    )
                                    window.location.reload(false)
                                } catch(err) {
                                    console.error(`Error: ${err}`)
                                }
                            }
                        }>Delete</button> 
                    </div>
                    
                    <div className="details">
                        <h3 className="overview_text">{movie.overview}</h3>
                        <h3 className="details_text">Review: {movie.review ? movie.review : 'NA'}</h3>
                        <h3 className="details_text">Rating &#9733; {movie.rating ? movie.rating : 'NA'}</h3>
                      
                        
                    </div>
                </div>
            </div>
        )
    })
    return(
        <div style={ style } className="watchlist-display">
            { movieList }
        </div>
    )
}