import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          console.log(movie);
          return <Movie key={movie.id} movie={movie} />;
        })}
      </ul>
    </div>
  );
};

export default MovieList;
