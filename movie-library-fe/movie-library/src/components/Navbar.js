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
            
            <h2 ><MdOutlineLocalMovies /> <br /> <span className="highlighted-text">Movies</span></h2>
  

            <h2><GiTheaterCurtains /> <br /> <span className="highlighted-text"> Home</span></h2>
            <h2><MdOutlineRateReview /> <br /> <span className="highlighted-text">Movie Reviews</span></h2>
            <form>
        <input type="text" placeholder="Search Movies..." />
        <button type="submit"><CgChevronRightO /></button>
      </form>
            
   
        </div>
    )
}

export default Navbar;
