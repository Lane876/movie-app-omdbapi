import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "../styles";

const SearchResult = ({ res }) => {
  const classes = useStyles();
  const movieId = res.imdbID;
  return (
    <div style={{ margin: "5px" }}>
      <Link to={`/${movieId}`}>
        <img src={res.Poster} alt="poster" className={classes.resultItem} />
      </Link>
    </div>
  );
};

export default SearchResult;
