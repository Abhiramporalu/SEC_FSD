import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditMovie = ({ editMovie, movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movieToEdit = movies.find((movie) => movie.id === id);

  const [updatedMovie, setUpdatedMovie] = useState({
    id: movieToEdit?.id || "",
    title: movieToEdit?.title || "",
    genre: movieToEdit?.genre || "",
    synopsis: movieToEdit?.synopsis || "",
    rating: movieToEdit?.rating || "",
    releaseDate: movieToEdit?.releaseDate || "",
    image: movieToEdit?.image || "",
  });

  useEffect(() => {
    if (!movieToEdit) {
      navigate("/"); // Redirect to home if the movie is not found
    }
  }, [movieToEdit, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMovie((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editMovie(updatedMovie);
    navigate("/"); // Redirect back to the homepage after editing
  };

  if (!movieToEdit) return null; // Render nothing if the movie isn't found yet

  return (
    <div className="edit-movie">
      <h1>Edit Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={updatedMovie.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={updatedMovie.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="synopsis">Synopsis</label>
          <textarea
            id="synopsis"
            name="synopsis"
            value={updatedMovie.synopsis}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={updatedMovie.rating}
            onChange={handleChange}
            min="0"
            max="10"
            step="0.1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="releaseDate">Release Date</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={updatedMovie.releaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            name="image"
            value={updatedMovie.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditMovie;