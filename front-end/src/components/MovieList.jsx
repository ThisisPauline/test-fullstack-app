import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MovieList = ({ movies }) => {
  if (movies == null) return <span>Loading...</span>;
  const [filterGenre, setFilterGenre] = useState("");
  const [filterRating, setFilterRating] = useState("");

  return (
    <table>
      <caption>Wilders Movies Database</caption>
      <thead>
        <tr>
          <th>
            {/* Filter ID */}
            <input type="search" />
          </th>
          <th>
            {/* Filter Title */}
            <input type="search" />
          </th>
          <th>
            {/* Filter Genre */}
            <select
              name="genre"
              id="genre"
              value={filterGenre}
              onChange={(e) => setFilterGenre(e.target.value)}
            >
              <option value="">Show All</option>
              {[...new Set(movies.map((movie) => movie.genre))].map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </th>
          <th>
            {/* Filter Year
                TODO: Date picker */}
            <input type="search" />
          </th>
          <th>
            {/* Filter Rating */}
            <input
              type="search"
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
            />
          </th>
        </tr>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {movies
          .filter((movie) => {
            let keepMovie = true;
            keepMovie &&= movie.genre
              .toLowerCase()
              .includes(filterGenre.toLowerCase());
            keepMovie &&= movie.rate >= filterRating;

            return keepMovie;
          })
          .map((movie) => {
            console.log(movie);
            return (
              <tr>
                <td>{movie.id}</td>
                <td>
                  <Link to={`/${movie.id}`} key={movie.id}>
                    {movie.title}
                  </Link>
                </td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
                <td>{movie.rate}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default MovieList;
