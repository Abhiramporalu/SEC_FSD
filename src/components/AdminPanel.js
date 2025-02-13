import React, { useState } from "react";


const AdminPanel = ({ addMovie }) => {
    const [newMovie, setNewMovie] = useState({
      title: "",
      genre: "",
      synopsis: "",
      rating: "",
      releaseDate: "",
      image: "",
    });
  
    const handleSubmit = () => {
      addMovie(newMovie); // Call addMovie prop to update the server and state
      setNewMovie({
        title: "",
        genre: "",
        synopsis: "",
        rating: "",
        releaseDate: "",
        image: "",
      });
    };
  
    return (
      <div className="screen">
        <div className="screen__content">
          <div className="login">
            <h1>Admin Panel</h1>
            <div className="login__field">
              <input
                type="text"
                placeholder="Title"
                value={newMovie.title}
                onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                className="login__input"
              />
            </div>
            <div className="login__field">
              <input
                type="text"
                placeholder="Genre"
                value={newMovie.genre}
                onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
                className="login__input"
              />
            </div>
            <div className="login__field">
              <textarea
                placeholder="Synopsis"
                value={newMovie.synopsis}
                onChange={(e) => setNewMovie({ ...newMovie, synopsis: e.target.value })}
                className="login__input"
              />
            </div>
            <div className="login__field">
              <input
                type="text"
                placeholder="Rating"
                value={newMovie.rating}
                onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
                className="login__input"
              />
            </div>
            <div className="login__field">
              <input
                type="text"
                placeholder="Release Date"
                value={newMovie.releaseDate}
                onChange={(e) => setNewMovie({ ...newMovie, releaseDate: e.target.value })}
                className="login__input"
              />
            </div>
            <div className="login__field">
              <input
                type="text"
                placeholder="Image URL"
                value={newMovie.image}
                onChange={(e) => setNewMovie({ ...newMovie, image: e.target.value })}
                className="login__input"
              />
            </div>
            <button onClick={handleSubmit} className="login__submit">
              Add Movie
            </button>
          </div>
        </div>
        <div className="screen__background">
        <div className="screen__background__shape screen__background__shape1"></div>
<div className="screen__background__shape screen__background__shape2"></div>
<div className="screen__background__shape screen__background__shape3"></div>
<div className="screen__background__shape screen__background__shape4"></div>

        </div>
      </div>
    );
  };
  
export default AdminPanel;
