const React = require('react');


function Show ({movies}) {
  
      return (
        <Default>
        <h3>{movies.name}</h3>
        <img src={movies.image} alt={movies.name} />

<a href={`/movie_library/${movies.id}/edit`}><button>Edit</button></a>          


        <li><a href="/home.js">Go home</a></li>

      
        </Default>
       )
  }
  

module.exports = Show
