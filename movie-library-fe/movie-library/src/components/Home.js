import React from "react";
import MovieDisplay from './MovieDisplay';

function Home () {
    return (
        <div className="home">
            <h3 className="popular" style={{marginTop: "200px", display: "flex"}}>Popular Movies</h3>
            <MovieDisplay/>
        </div>
        
    )
}

export default Home