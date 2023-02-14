import React from 'react';
import './Navbar.css';
import { GiTheaterCurtains } from 'react-icons/gi';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { MdOutlineRateReview } from 'react-icons/md';
import logo from './logo.png';

function Navbar () {
    return (
      
        <div className='navbar'>
        <img  src={logo} alt="Logo" className="logo"/>
            
            <h1 ><MdOutlineLocalMovies /> <br /> Movies</h1>
            <h2><GiTheaterCurtains /> <br />  Home</h2>
            <h2><MdOutlineRateReview /> <br /> Movie Reviews</h2>
            <form>
        <input type="text" placeholder="Search..." />
        <button type="submit">Go</button>
      </form>
            
   
        </div>
    )
}

export default Navbar;
