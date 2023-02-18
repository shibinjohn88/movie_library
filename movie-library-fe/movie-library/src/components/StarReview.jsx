import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

function StarReview(props) {
  const [rating, setRating] = useState(props.rating || null);
  const [hover, setHover] = useState(null);
  
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        )
      })}
      {rating && <p>You have rated this Movie {rating} stars.</p>}
    </div>
  );
}

export default StarReview;
