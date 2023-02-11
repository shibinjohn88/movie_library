//import stuff 
const review = require('../../../models/review')

export function ReviewMovie (data) {
    return(
        <Container>
            <div className="reviews">
                <h2>Reviews</h2>

                <div className="review-details">

                </div>

                <div className="buttons">
                    <a href={''}>
                        <button className="edit-button">Edit</button>
                    </a>

                    <a href={''}>
                        <button className="delete-button">Delete</button>
                    </a>
                </div>
            </div>
        </Container>
    )
}