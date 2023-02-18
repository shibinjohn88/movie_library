import React from 'react';


const SearchMovieList = (props) => {
	 console.log("props",props)
	const movie = props.resultsImdbId




	
	return(

		
	
				<div>
					 
					
                            <p>{movie.Title}</p>
                            <p>{movie.Actors}</p>
                            <p>{movie.Awards}</p>
                            <p>{movie.BoxOffice}</p>
                            <p>{movie.Country}</p>
                            <p>{movie.DVD}</p>
                            <p>{movie.Director}</p>
                            <p>{movie.Genre}</p>
                            <p>{movie.Language}</p>
                            <p>{movie.Metascore}</p>
                            <p>{movie.Released}</p>
                            <p>{movie.Runtime}</p>
                            <p>{movie.Rating}</p>
                            <p>{movie.Writers}</p>
                            <p>{movie.Type}</p>
							<p>{movie.Year}</p>
                            <p>{movie.ImdbID}</p>
                            <p>{movie.IMdbRating}</p>
                           <p>{movie.ImdbVotes}</p>
						   <p>{movie.Website}</p>
						   <p>{movie.Plot}</p>

            	</div>
        
       )   
	}
export default SearchMovieList;