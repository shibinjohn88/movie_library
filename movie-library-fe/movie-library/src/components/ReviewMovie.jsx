import React, { useEffect, useState } from "react";
import styles from './ReviewMovie.css'

export function ReviewMovie(data) {
    console.log("review movie component")
    const [reviewState, setReviewState] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/movies/505642/review`)
        .then((data)=> {
            data.json().then((review) => {
                setReviewState(review)
            })
        })
    }, [])

    return(
        <div>
            <div style={styles} className="all-reviews">
                <h2>Reviews</h2>

                <div>
                    {reviewState.length > 0 && reviewState.map((review) => {
                        return(
                            <div className="review-boxes">
                                <div className="review">
                                    <div className="author-title">
                                        <h4>A review by {review.author_details.username}</h4>
                                    </div>

                                    <div className="rating"> 
                                    <p>Rating: {review.author_details.rating}/10</p>
                                    </div>

                                    <div className="content">
                                        <p>{review.content}</p>
                                    </div>
                                </div>

                                <div className="buttons">
                                    <a href={'/'}>
                                        <button className="edit-button">Edit</button>
                                    </a>

                                    <form method="POST" action={`/movies/${review._id}?_method=DELETE`}>
                                        <button className="delete-button">Delete</button>
                                    </form>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}