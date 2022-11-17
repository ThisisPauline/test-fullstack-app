import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(undefined);

  const { id } = useParams();
  const navigate = useNavigate();

  const uri = `http://localhost:5005/movies/${id}`;

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(uri, { cancelToken: source.token })
      .then((response) => response.data)
      .then((data) => setMovie(data[0]));

    return () => {
      source.cancel("Component got unmounted");
    };
  }, []);

  console.log(movie);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(uri, movie)
      .then((response) => response.data)
      .then((data) => console.log(data));
  }

  function handleDelete(e) {
    e.preventDefault();
    axios
      .delete(uri)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  }

  return (
    <div className={styles.movieContainer}>
      {movie != null && (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={movie.title}
              onChange={(e) =>
                setMovie({ ...movie, ...{ title: e.target.value } })
              }
            />
            <input
              type="text"
              value={movie.genre}
              onChange={(e) =>
                setMovie({ ...movie, ...{ genre: e.target.value } })
              }
            />
            <input
              type="text"
              value={movie.year}
              onChange={(e) =>
                setMovie({ ...movie, ...{ year: e.target.value } })
              }
            />
            <input
              type="text"
              value={movie.rate}
              onChange={(e) =>
                setMovie({ ...movie, ...{ rate: e.target.value } })
              }
            />
            <button type="submit">Save changes</button>
          </form>
          <buton onClick={handleDelete}>Delete movie</buton>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
