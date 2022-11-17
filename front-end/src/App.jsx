import "./App.css";
import MovieListPage from "./Pages/MovieListPage";
import MovieDetailsPage from "./Pages/MovieDetailsPage";
import { Link, Route, Routes } from "react-router-dom";
import AppStyles from "./App.module.css";

function App() {
  return (
    <div className={AppStyles.nav}>
      <nav>
        <ul>
          <li>
            <Link to="/">All Movies</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/:id" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
