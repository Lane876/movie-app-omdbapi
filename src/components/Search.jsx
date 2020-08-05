import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useStyles } from "../styles";

const Search = ({ handleInput, searchQuery, handleYear, handlePlot }) => {
  const classes = useStyles();
  return (
    <div className={classes.searchContainer} className='searchContainer'>
      <input
        type="search"
        placeholder="by title..."
        onChange={handleInput}
        className={classes.searchInput}
      />
      <input
        type="number"
        placeholder="by year..."
        onChange={handleYear}
        className={classes.searchYear}
      />

      <select onChange={handlePlot} className={classes.selectInfo}>
        <option>plot lenght</option>
        <option>full</option>
        <option>short</option>
      </select>

      <Button
        variant="contained"
        color="primary"
        className={classes.searchBtn}
        style={{margin:"2px"}}
      >
        <SearchIcon onClick={searchQuery} />
      </Button>
    </div>
  );
};

export default Search;
