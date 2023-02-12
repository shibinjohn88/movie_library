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
            <div style={styles} className="reviews-holder">
                <h2>Reviews</h2>

                <div>
                    {reviewState.length > 0 && reviewState.map((review) => {
                        return(
                            <div className="reviews">
                                {review.author_details.username}
                                <br />
                                {review.author_details.rating}
                                <br />
                                {review.content}

                                <div className="buttons">
                                    <a href={'/'}>
                                        <button className="edit-button">Edit</button>
                                    </a>

                                    <a href={'/'}>
                                        <button className="delete-button">Delete</button>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}