import React from "react";
import { useStyles } from "../styles";

const Search = ({ handleInput, searchQuery, handleYear, handlePlot }) => {
  const classes = useStyles();
  return (
    <div className={classes.searchContainer} className='searchContainerMedia'>
      <input
        type="search"
        placeholder="by title..."
        onChange={handleInput}
        className={classes.searchInput}
        onKeyPress={searchQuery}
      />
      <input
        type="number"
        placeholder="by year..."
        onChange={handleYear}
        className={classes.searchYear}
        onKeyPress={searchQuery}
      />

      <select onChange={handlePlot} className={classes.selectInfo} onKeyPress={searchQuery}>
        <option>plot lenght</option>
        <option>full</option>
        <option>short</option>
      </select>
    </div>
  );
};

export default Search;
