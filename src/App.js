import "./App.css";
import { Route, Routes } from "react-router-dom";
import MovieData from "./components/MoviesData";
import MovieInfo from "./components/MovieInfo";
import Navbar from "./components/Navbar";
import BookTicket from "./components/BookTicket";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<MovieData />} />
        <Route path="/shows/:id" element={<MovieInfo />} />
        <Route path="/bookTicket/:id" element={<BookTicket />} />
      </Routes>
    </div>
  );
}

export default App;
