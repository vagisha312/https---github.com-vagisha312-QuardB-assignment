import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

//import { MOVIE_DETAIL_URL } from "../API";
import noPoster from "../assets/no-poster.jpg";

const MOVIE_DETAIL_URL="https://api.tvmaze.com/shows"

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAIL_URL}/${id}`)
      .then((res) => {
        setMovieDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="boddy">
    <div className="card">
    {movieDetail.image ? (
            <img src={movieDetail.image.original} className="card-img" alt="" />
          ) : (
            <img src={noPoster} alt="" />
          )}
          <div className="overlay">
          <h1 className="card-title"> {movieDetail.name}</h1>
          <p className="card-info"> <span className="card-infoo">Summary:</span> {movieDetail.summary}</p>
          <p className="card-info">  <span className="card-infoo">Language:</span> {movieDetail.language}</p>
          <p className="card-info">   {movieDetail.premiered ? (
              <>
                <span className="card-infoo">Premiered:</span> {movieDetail.premiered}
              </>
            ) : (
              <>
                <span className="card-infoo">Premiered:</span> Not Available
              </>
            )}</p>
            <p className="card-info">  <span className="card-infoo">Language:</span> {movieDetail.language}</p>
            <p className="card-info">   {movieDetail.rating && movieDetail.rating.average > 0 ? (
              <>
                <span className="card-infoo">Rating:</span> {movieDetail.rating.average}
              </>
            ) : (
              <>
                <span className="card-infoo">Rating:</span> 0.0
              </>
            )}</p>
            <button className="card-btn"><Link to={"/bookTicket/" + movieDetail.id}>Book movie ticket</Link></button>

          

          </div>
    </div>
      


    </div>










    
  );
};

export default MovieDetail;


