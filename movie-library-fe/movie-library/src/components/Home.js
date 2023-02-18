import React from "react";
import MovieDisplay from './MovieDisplay';
import logo3 from './BLOCKFLIX .png'
import './Home.css';

function Home () {
    return (
        <div className="home">
            <img src={logo3} className="logo3" />
            <h2 className="popular" style={{marginTop: "0px", display: "flex", marginLeft: '50px'}}>Popular Movies</h2>
            <MovieDisplay/>
        </div>
        
    )
}

export default Home