import React from "react";
import { Typography, Button } from "@material-ui/core";
import Search from "./Search";
import { useStyles } from "../styles";

const Home = ({
  load,
  SearchResult,
  result,
  error,
  handleInput,
  searchQuery,
  handleYear,
  handlePlot
}) => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.bannerText} color="primary">
        Search movies by name, year, genre, cast and plot
      </Typography>
      <Search handleInput={handleInput} searchQuery={searchQuery} handleYear={handleYear} handlePlot={handlePlot}/>
      <div className={classes.homeResult}>
        {error === undefined && (
          <Typography variant="h3" color="secondary">
            Movie not found...
          </Typography>
        )}
        {result.map((res) => (
          <SearchResult key={res.imdbID} res={res} />
        ))}
      </div>
      {result.length > 2 && (
        <div className={classes.loadMoreBtn}>
          <Button
            onClick={load}
            variant="contained"
            color="primary"
            className={classes.loadBtn}
          >
            Load more movies
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
