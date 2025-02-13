import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import AdminPanel from "./components/AdminPanel";
import EditMovie from "./components/EditMovie";

import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch("http://localhost:5000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error loading movies:", error));
  };

  const addToWatchlist = (movie) => {
    if (!watchlist.some((item) => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const addMovie = (newMovie) => {
    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    })
      .then((response) => response.json())
      .then((addedMovie) => setMovies([...movies, addedMovie]))
      .catch((error) => console.error("Error adding movie:", error));
  };

  const deleteMovie = (id) => {
    fetch(`http://localhost:5000/movies/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) setMovies(movies.filter((movie) => movie.id !== id));
        else throw new Error("Failed to delete movie");
      })
      .catch((error) => console.error("Error deleting movie:", error));
  };

  const editMovie = (updatedMovie) => {
    fetch(`http://localhost:5000/movies/${updatedMovie.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMovie),
    })
      .then((response) => response.json())
      .then((updatedMovieFromServer) =>
        setMovies((prevMovies) =>
          prevMovies.map((movie) =>
            movie.id === updatedMovieFromServer.id
              ? updatedMovieFromServer
              : movie
          )
        )
      )
      .catch((error) => console.error("Error updating movie:", error));
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.synopsis.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                movies={filteredMovies}
                addToWatchlist={addToWatchlist}
                deleteMovie={deleteMovie}
              />
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} />} />
          <Route path="/admin" element={<AdminPanel addMovie={addMovie} />} />
          <Route
            path="/edit/:id"
            element={<EditMovie editMovie={editMovie} movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
