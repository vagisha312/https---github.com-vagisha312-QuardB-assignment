import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MOVIE_DETAIL_URL } from "../API";
import noPoster from "../assets/no-poster.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';



const BookMovieTicket = () => {
  const [movieData, setMovieData] = useState({});
  const [formData, setFormData] = useState({ name: "", bookingDate: "" });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAIL_URL}/${id}`)
      .then((res) => {
        setMovieData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(formData); // Log form data to the console
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="bodyy">
      <div className="form">
        <div className="title1">{movieData.name}</div>
        
        <form onSubmit={handleFormSubmit}> {/* Attach submit event handler */}
          <div className="input-container ic1">
            <input
              id="name"
              className="input"
              type="text"
              placeholder="Enter name"
              value={formData.name} // Bind input value to state
              onChange={handleInputChange} // Attach input change handler
            />
            <div className="cut"></div>
          </div>
    
          <div className="input-container ic2">
            <input
              id="bookingDate"
              className="input"
              type="date"
             
              value={formData.bookingDate}
              onChange={handleInputChange} // Attach input change handler
            
               
             
              
            />
            
          </div>
    
          <button type="submit" className="btn btn-outline-info submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookMovieTicket;
