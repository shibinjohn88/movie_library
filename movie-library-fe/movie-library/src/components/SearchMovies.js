import React, {useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchMovieList from './SearchMovieList';
import SearchProfile from './SearchProfile';
import Stack from 'react-bootstrap/Stack';
import './SearchMovies.css'
// import { Link } from "react-router-dom";

function SearchMovies () {
    const [results, setResults] = useState([])
    // const [filteredResults, setFilteredResults] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [resultsImdbId, setResultsImdbId] = useState([])
    
    

    // useEffect (() => {
    //     const moviesData = results.filter(entry => entry.wrapperType === 'track')
    //     setFilteredResults(moviesData);
    //          },[results])

    //General search for all movies under searchterm
    const handleSearch = (e ) => {
    e.preventDefault()
    console.log(searchTerm);
    const API_URL = `http://localhost:3001/main/s/${searchTerm}`
    

        const fetchData = async () => {
            const response = await fetch(API_URL);
            const resData = await response.json();
            // console.log(resData);
            setResults(resData.Search);
            // console.log(resData.Search) 
        }
        fetchData()
    }

    //Search for specific movie with inclusive details
    const handleSearchIncl = (e ) => {
        e.preventDefault();
        // const movieInfoId = document.getElementsByClassName("row"); //get the element by classname
        // console.log(e.target);

        const movieDataIndex = e.target.id;       
        console.log(movieDataIndex);

        const searchImdbId = results[movieDataIndex].imdbID         //get the array[i = n] then get the object value.
        console.log("line 49",searchImdbId);
        const API_URL_Incl = `http://localhost:3001/main/i/${searchImdbId}`
        
    
            const fetchDataIncl = async () => {
                const response = await fetch(API_URL_Incl);
                const resDataIncl = await response.json();
                console.log("resDataIncl",resDataIncl);
                setResultsImdbId(resDataIncl);                  //resultsImdbId get sent to SearchMovieList componet
            }
            fetchDataIncl()
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


        const saveToFavorite= async (e) =>{
            // console.log(e.target.id);
            /*
                return results.map((result, index)=> {
                favorite(index).push(result(index));
                console.log(favorite)
                
            }
            */
        
            //const element = document.getElementByTag("div")
            let id = e.target.id;
            console.log(results[id]);
            let favorites = results[id];
            /*
            axios.post('http://localhost:5000/movies',
                JSON.stringify(favorite)
            , { headers: { 'Content-Type': 'application/json'}})
            .then(res => console.log(res))
            .catch(err => console.log(err))
            */
            
            const response = await fetch('http://localhost:3001/post',{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(favorites)
        })
        console.log(favorites)
        const result = await response.json();
        return result;
        
        /*.then(res => {
                  return res.json()
              })
            .then(data => console.log("data"))
            .catch(error => console.log('Error'))df
            */
          }
        
          
          

 console.log("resultsImdbId",resultsImdbId);
        return(
            <div className="body">
            
                
                    
                
            
               
            
               
                {searchInput()}

            
                <Stack direction="horizontal" gap={3}>
            
                {results.map((movie, index) => {
            return (
                <div className='container-fluid movie-app d-inline'>
                <div className='row d-inline-flex align-items-center mt-4 mb-4'>
                    <div className='row' id={index}  key={index} >
                            
                        <div className='image-container d-flex flex-column justify-content-start m-3 border p-4 bg-light border-primary'>
                  
                            <img className= "inclusive" id={index} src= {movie.Poster} alt=" poster" onClick={(e) => handleSearchIncl(e, results )} />
                            
                               
                            
                     
                                <div style={{ fontWeight: 'bold' }}>
                                    <span>{movie.Title}</span>
                                    <span>:</span>
                                    <span className = "movieId">{movie.imdbID}</span>
                                    <span>:</span>
                                    <span>{movie.Year}</span>
                                </div>
                                <div className='overlay d-flex align-items-center justify-content-center'>
                                    <p style={{ background:'white', color:'red', fontWeight:'bold' }} >Click Here for Details</p>
                                </div>
                        </div>

                        <div>

                        </div>



                            

                            
                    <div>
                     <button className='button> button1' onClick={(e)=>saveToFavorite(e, results)} id={index}>favorites ❤️</button>
                    </div>
                    
                     
                    </div> 
                </div>
            </div>
            
                
                    )}) } 
                </Stack> 

                
                 <div className='box1 body'>
                 <h1><p>Movie Search Information</p></h1>
                    <div className='box2'>
                        <SearchProfile />
                    </div>
                    <div className='box3'>
                        <SearchMovieList   resultsImdbId={resultsImdbId} /> 
                    </div>
                </div>
                    
            


            </div>

        )

        
    
    

    }
    export default SearchMovies;