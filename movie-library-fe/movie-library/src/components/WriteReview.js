import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './WriteReview.css'

function WriteReview () {
    const {id} = useParams ()
    const [result, setResult] = useState({})
    useEffect (() => {
      fetch(`/api/movies/${id}`)
        .then((response) => 
        response.json())
        .then((data) => {
            console.log(data.poster_path)
            setResult(data)
        })
    }, [])
    return (
        <div className="edit_review">
            <div className="wr_poster">
              <img src={`https://image.tmdb.org/t/p/original${result.poster_path}`} alt='movie poster' className='wr_image'/>
            </div>
            <div className="wr_review">
              <h2>Review: <input className="text_review" id="review" defaultValue={result.review}></input></h2>
              <h2>Rating &#9733; <input type='number' defaultValue={result.rating} id='rating'></input>
              </h2>
              <button id="submit" onClick={async () => {
                  const review = document.getElementById('review').value
                  const rating = document.getElementById('rating').value
                  try {     
                      const response = await fetch(`/api/movies/${id}`, {
                        method: 'put',
                        headers: {'content-type': 'application/json'},
                        body: JSON.stringify({
                          "review": review,
                          "rating": rating
                        })
                      });
                      window.location.replace('/watchlist')
                    } catch(err) {
                      console.error(`Error: ${err}`);
                    }
              }}>Submit</button>
            </div>
            
            
            
        </div>
    )

    }

export default WriteReview