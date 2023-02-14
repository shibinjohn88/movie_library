import React from "react";
import { useParams } from "react-router-dom";
import './WriteReview.css'

function WriteReview () {
    const {id} = useParams ()
    return (
        <div className="edit_review">
            
            <h2>Review: <input className="text_review" id="review"></input></h2>
            <h2>Rating: <input className="list_rating" type='number' id="rating"></input></h2>
            <button id="submit" onClick={async () => {
                const review = document.getElementById('review').value
                const rating = document.getElementById('rating').value
                try {     
                    const response = await fetch(`http://localhost:3001/movies/${id}`, {
                      method: 'put',
                      headers: {'content-type': 'application/json'},
                      body: JSON.stringify({
                        "review": review,
                        "rating": rating
                      })
                    });
                    window.location.replace('http://localhost:3000/watchlist')
                  } catch(err) {
                    console.error(`Error: ${err}`);
                  }
            }}>Submit</button>
            
            
        </div>
    )

    }

export default WriteReview