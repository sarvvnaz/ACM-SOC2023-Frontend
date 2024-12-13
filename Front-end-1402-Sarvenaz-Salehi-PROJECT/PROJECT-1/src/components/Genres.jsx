import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function Genres() {
  const [Genres, setGenres] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`https://moviesapi.ir/api/v1/genres`).then((res) => {
        setGenres(res.data);
      });
    };
  

    fetchData();
  }, []);


  return (
    <div>
      <div style={{color:"white"}} className="genre-section">
        {Genres.map((genre, index) => (
          <h1>{genre.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default Genres;
