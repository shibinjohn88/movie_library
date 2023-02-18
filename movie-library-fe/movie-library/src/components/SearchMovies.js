import React, {useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import './SearchMovies.css'
// import { useParams } from "react-router-dom";


function SearchMovies () {
    const [results, setResults] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    // const {id} = useParams();
    
    

    const handleSearch = (e ) => {
    e.preventDefault()
    console.log(searchTerm);
    const API_URL = `http://localhost:3001/main/${searchTerm}`
    console.log(API_URL)
    

        const fetchData = async () => {
            const response = await fetch(API_URL);
            const resData = await response.json();
             console.log('line 35',resData);
             setResults(resData.results);
             console.log("line 37",results) 
        }
        fetchData()
    }

    

    
    
    const searchInput = () => {
         return (
             <div className='sticky-header'>
                <div className='header'>
                <div>
                    <h1><p>Movie Library Search</p></h1>
                </div>
                    <form>
                        <input type="text" placeholder="Please enter your movie." onChange={e => setSearchTerm(e.target.value)}/>       
                        <button onClick={(e) => handleSearch(e )}>Submit</button>
                    </form>
                </div>
              </div>
            )
        
        }


        // const saveToFavorite= async (e) =>{
        //     let id = e.target.id;
        //     console.log(results[id]);
        //     let favorites = results[id];
            
        //     const response = await fetch('http://localhost:3001/post',{
        //         method:'POST',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify(favorites)
        // })
        // console.log(favorites)
        // const result = await response.json();
        // return result;
        
        
        //   }
        
          
          

 console.log(results);
        return(
            <div className="body">
            
                
                    
                
            
               
            
               
                {searchInput()}
                
                <Stack direction="horizontal" gap={3}>
                
                {results.map((movie, index) => {
                const API_URL_POSTER = `https://image.tmdb.org/t/p/original${movie.poster_path}`
                console.log(API_URL_POSTER, index)
            return (
                <div className='container-fluid movie-app d-inline'>
                <div className='row d-inline-flex align-items-center mt-4 mb-4'>
                    <div className='row' id={index}  key={index} >
                            
                        <div className='image-container d-flex flex-column justify-content-start m-3 border p-4 bg-light border-primary'>
                  
                          
                            <img className= "inclusive"  src= {API_URL_POSTER} alt=" poster" />
        
                                <div style={{ fontWeight: 'bold' }}>
                                    <span>{movie.Title}</span>
                                    <span>:</span>
                                    <span className = "movieId">{movie.imdbID}</span>
                                    <span>:</span>
                                    <span>{movie.Year}</span>
                                </div>
                                
                        </div>

                        <div>

                        </div>
                            
                    <div>
                    
                     <button id={index} onClick={async (e) => {
                        const id = e.target.id
                        window.location.replace(`/show/${results[id].id}`)(results[id].id)
                    }}>Show</button>
                    </div>
                    
                     
                    </div> 
                </div>
            </div>
            
                
                    )}) } 
                </Stack> 

                
                 
            


            </div>

        )

        
    
    

    }
    export default SearchMovies;