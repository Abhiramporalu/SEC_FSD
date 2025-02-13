import React from "react";

const Watchlist = ({ watchlist }) => (
  <div className="movie-list">
    
    {watchlist.length > 0 ? (
      watchlist.map((movie) => (
        <div key={movie.id} className="movie-card">
          <div className="movie-image-container">
            <img
              src={movie.image}
              alt={`${movie.title} Poster`}
              className="movie-image"
            />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>{movie.synopsis}</p>
              <p>Release Date : {movie.releaseDate}</p>
              <p>Genre : {movie.genre}</p>
              <p>Rating : {movie.rating}</p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>Your watchlist is empty.</p>
    )}
  </div>
);

export default Watchlist;
