import React from "react";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const SearchResult = ({ res }) => {

  const movieId = res.imdbID
  return (
    <div style={{ margin: "3px" }}>
      <Link to={`/${movieId}`}>
      <img
        src={res.Poster}
        alt="poster"
        style={{ maxWidth: "100%", maxHeight: "500px", borderRadius: "3px" }}
      />
      </Link>

    </div>
  );
};

export default SearchResult;
