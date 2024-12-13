import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/styles/Movie.css";
import starLogo from "../assets/images/star.png";

function Movie({match}) {
  const { id: movie_id } = match.params;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://moviesapi.ir/api/v1/movies/${movie_id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [movie_id]);

  return (
    <div className=" movie">
      <div className="movie-header">
{movie.images?.map((image,index) =>  index===0?<img src={image}></img>:"")};
      </div>
      <div className="movie_info">
        <div className="poster movie_info_item">
          <img className="img-fluid" src={movie.poster} alt="" />
        </div>
        <div className="description movie_info_item">
          <div className="movie-title">
            
          <h1>{movie.title}        <span style={{fontSize:"14px", color:"gray"}}>    {movie.rated},<br />  <img className="star" src={starLogo} alt="" /> {movie.imdb_rating}</span></h1>
          <p>{movie.runtime}</p>
          </div>
          <p>
            {movie.year}{" "}
            {movie.genres?.map((genre, index) => (
              <span key={index}>{genre} </span>
            ))}
          </p>
          <h6>{movie.plot}</h6>
        </div>
        <div className="download_section movie_info_item ">
        <button type="button" class="btn btn-danger">Download Now</button>
<button type="button" class="btn btn-warning">Watch Now</button>
        </div>
        <div className="cast movie_info_item">
          <h6>Director: <span><p>{movie.director}</p></span></h6>
          <h6>Cast: <span> <p>{movie.actors}</p></span></h6>
        </div>
      </div>
    </div>
  );
}

export default Movie;
