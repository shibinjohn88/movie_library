import React, { useEffect, useState } from "react";
import MovieDisplay from './MovieDisplay';
import './AddMovie.css'
const API_KEY = '2186c8fcda107afc8d4e5f502d9ebd25';


const AddMovie = () => {
    const [title, setTitle] = useState("");
    const [cast, setCast] = useState([]);
    const [releaseDate, setReleaseDate] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [language, setLanguage] = useState("");
    const [isAdding, setIsAdding] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleSubmit = async (event) => {
    event.preventDefault();
    setIsAdding(true);
    try {
    const response = await fetch("https://api.themoviedb.org/3/movie", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    api_key: API_KEY,
    title: title,
    cast: cast,
    release_date: releaseDate,
    description: description,
    image: image,
    language: language
    }),
    });
    const data = await response.json();
    console.log(data);
    setIsAdding(false);
    } catch (error) {
    console.error(error);
    setIsAdding(false);
    }
    };
    
    return (
    <div className="Add_Movie_Form">
    <h1 className="movie_title">ADD A MOVIE</h1>
    <form onSubmit={handleSubmit}>
    <label>Title:</label>
    <input
    type="text"
    id="title"
    value={title}
    onChange={(event) => setTitle(event.target.value)}
    />
    <br />
    <label>Release Date:</label>
    <input
    type="date"
    id="releaseDate"
    value={releaseDate}
    onChange={(event) => setReleaseDate(event.target.value)}
    />
    <br />
    <label>Description:</label>
    <textarea
    id="description"
    value={description}
    onChange={(event) => setDescription(event.target.value)}
    />
    <br />
    <label>Upload Image:</label>
    <input
    type="file"
    id="image"
    onChange={(event) => setImage(event.target.files[0])}
    />
    <br />
    <label>Language:</label>
<select id="language" value={language} onChange={(event) => setLanguage(event.target.value)}>
  <option value="English">English</option>
  <option value="Spanish">Spanish</option>
  <option value="German">German</option>
  <option value="French">French</option>
  <option value="Italian">Italian</option>
  <option value="Japanese">Japanese</option>
  <option value="Chinese">Chinese</option>
  <option value="Russian">Russian</option>
  <option value="Hindi">Hindi</option>
  <option value="Arabic">Arabic</option>
</select>
    <button type="submit">Add Movie</button>
    {isAdding && <p>Adding movie..</p>}
    </form>
    {isSubmitted && <p>Congratulations! You just uploaded a movie.</p>}
    <MovieDisplay />
    </div>
  );
};

export default AddMovie;
