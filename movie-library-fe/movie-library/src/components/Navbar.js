import React from 'react';
import './Navbar.css';
import { GiTheaterCurtains } from 'react-icons/gi';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { MdOutlineRateReview } from 'react-icons/md';
import { CgChevronRightO } from 'react-icons/cg'
import logo from './logo.png';



function Navbar () {
    return (
      
        <div className='navbar'>
            
            <img  src={logo} alt="Logo" className="logo"/>
                    
            <h2 ><MdOutlineLocalMovies /> <br /> <span className="highlighted-text"><a href='/MovieList' style={{textDecoration: "none"}}>Movies</a></span></h2>
        

            <h2><GiTheaterCurtains /> <br /> <span className="highlighted-text"><a href='/' style={{textDecoration: "none"}}>Home</a></span></h2>
            <h2><MdOutlineRateReview /> <br /> <span className="highlighted-text"><a href='/watchlist' style={{textDecoration: "none"}}>Watchlist</a></span></h2>
          
            
                <button> <CgChevronRightO  /> Search Movies </button>
         
            
        </div>
    )
}

export default Navbar;
