import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Deadpool",
      genre: "action",
      year: 1234,
      rate: 4.8,
    },
  ]);

  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
