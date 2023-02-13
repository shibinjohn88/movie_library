import React from "react";
import EditReview from "./EditReview";
import MovieDisplay from './MovieDisplay';
import { ReviewMovie } from "./ReviewMovie";

function Home () {
    return (
        <div className="home">
            
            <h3 className="popular" style={{marginTop: "200px", display: "flex"}}>Popular Movies</h3>
            <MovieDisplay/>
            <ReviewMovie />
            {/* { <EditReview /> } */}
        </div>
        
    )
}

export default Home