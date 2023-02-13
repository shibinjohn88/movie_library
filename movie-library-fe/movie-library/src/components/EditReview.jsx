import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './EditReview.css'

export default function EditReview () {
    const { review_id } = useParams()
    const [editReviewState, setEditReviewState] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:3001/movies/${review_id}/get-review`)
        .then((review) => {
            review.json().then((resolvedReview) => setEditReviewState(resolvedReview))
        })
    }, [])

    function handleSubmit(e){
        const reqBody = {
            "username": e.target.elements.username.value,
            "updated-content": e.target.elements["updated-content"].value,
            "rating": e.target.elements.rating.value
        }
        console.log(reqBody)
        const url = `http://localhost:3001/movies/${editReviewState._id}/edit-review`
        fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reqBody)
        }).then((result) => {
            console.log(result)
            this.props.history.push(`/showreviews/${editReviewState.movie_id}`)
        })
    }

    return (
        <div>
                { editReviewState != null && 
                    (
                    <div style={styles}>
                        <h2>Edit Review</h2>
                            <div className="columns">
                                <form onSubmit={handleSubmit} className="edit-form">
                                    <div className="row">
                                        <div>
                                            <label htmlFor='name'>Username</label>
                                        </div>

                                        <div>
                                            <input
                                                className='edit-username'
                                                id='username'
                                                name='username'
                                                defaultValue={editReviewState.author_details.username}
                                                readOnly />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <label htmlFor='rating'>Rating</label>
                                        </div>

                                        <div>
                                            <input 
                                                className='edit-rating' 
                                                id='rating'
                                                name="rating"
                                                defaultValue={editReviewState.author_details.rating}
                                                required />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <label htmlFor='review'>Review</label>
                                        </div>

                                        <div>
                                            <textarea
                                                className='edit-review'
                                                id='updated-content'
                                                name="updated-content"
                                                defaultValue={editReviewState.content}
                                                required />
                                        </div>
                                    </div>

                                        <input className='submit-button' type="submit" value="Update Review" />
                            </form>
                        </div>
                    </div>
                        )
                    }
        </div>
    )
}