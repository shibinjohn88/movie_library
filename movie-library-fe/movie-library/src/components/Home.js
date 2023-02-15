import React from "react";
import MovieDisplay from './MovieDisplay';

function Home () {
    return (
        <div className="home">
            
            <h2 className="popular" style={{marginTop: "200px", display: "flex", marginLeft: '50px'}}>Popular Movies</h2>
            <MovieDisplay/>
        </div>
        
    )
}

export default Home