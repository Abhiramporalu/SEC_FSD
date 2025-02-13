import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ movies, addToWatchlist, deleteMovie }) => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
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
                  <div className="dropdown">
                    <button
                      className="btn custom-dropdown-btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ⋮
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => addToWatchlist(movie)}
                        >
                          Add to Watchlist
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => navigate(`/edit/${movie.id}`)}
                        >
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => deleteMovie(movie.id)}
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
