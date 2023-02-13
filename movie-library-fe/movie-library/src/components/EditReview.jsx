const React = require('react')

function EditReview (data) {
    return (
          <main>
            <h1>Edit Review</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                <div>
                    <label htmlFor='name'>Username</label>
                    <input
                        className='form-control'
                        id='username'
                        name='username'
                        value={data.review.author_details.username} />

                </div>

                <div>
                    <label htmlFor='rating'>Rating</label>
                    <input 
                        className='rating' 
                        id='classname'
                        value={data.review.author_details.rating}
                        />
                </div>

                <div>
                    <label htmlFor='review'>Review</label>
                    <input
                        className='review'
                        id='review'
                        value={data.review.content} 
                        />
                </div>

                <input className='submit-button' type="submit" value="Update Review" />
            </form>

          </main>
    )
}

module.exports = EditReview