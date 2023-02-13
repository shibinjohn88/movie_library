import React, { useEffect, useState } from "react";
import styles from './ReviewMovie.css'

import { useParams } from 'react-router-dom';

export function ReviewMovie() {
    const { movie_id } = useParams() //will grab the id from the url
    console.log(movie_id)
    const [reviewState, setReviewState] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/movies/${movie_id}/review`)
        .then((data)=> {
            data.json().then((review) => {
                console.log(review)
                setReviewState(review)
            })
        })
    }, [])

    function deleteReview(review_id) {
        fetch(`http://localhost:3001/movies/${review_id}/review`, {
            method: "DELETE"
        }).then(() => {
            //after we complete the delete, we filter out the deleted review from out state
            //using the review id that we passed earlier to the delete url
            const newState = reviewState.filter((item) => {
                return item._id !== review_id
            })
            setReviewState(newState)
        })
    }

    console.log(reviewState)
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
                                    <a href={`/editreviews/${review._id}`}>
                                        <button className="edit-button">Edit</button>
                                    </a>

                                    <button className="delete-button" onClick={() => deleteReview(review._id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}