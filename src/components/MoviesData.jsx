import React, { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';



import noPoster from "../assets/no-poster.jpg";
const API_URL="https://api.tvmaze.com/search/shows?q=all"

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (



    <div className="movie-list  ">
      {movies.map((movie) => (
        <div className="movie-card cardd " key={movie.show.id}>
          <div className="movie-banner overflow shadow">
            {movie.show.image ? (
              <img src={movie.show.image.original} className="imggg" alt="" />
            ) : (
              <img src={noPoster} alt="" />
            )}
          </div>
          <div className="movie-title">
            <span>{movie.show.name}</span>
          </div>
          <div className="details-btn">
            <button className="btn btn-outline-success"onClick={() => navigate(`/shows/${movie.show.id}`)}>
              More Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
