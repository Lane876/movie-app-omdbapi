import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { useStyles } from "../styles";
import { Typography, Button } from "@material-ui/core";
import { apiKey } from "../config";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useSelector } from "react-redux";

const MovieDetails = (props) => {
  const plot = useSelector((state) => state.plot.plot);
  const classes = useStyles();
  const [result, setResult] = useState("");
  const id = props.match.params.movieId;

  useEffect(() => {
    const getDetails = async () => {
      const result = await Axios.get(apiKey + "&i=" + id + "&plot=" + plot);
      const res = result.data;
      setResult(res);
    };
    getDetails();
  }, [id, plot]);

  return (
    <div className={classes.movieDetailsContainer}>
      <div style={{ margin: "2rem" }}>
        <img
          src={result.Poster}
          alt="poster"
          className={classes.moviesDetailsImage}
        />
      </div>
      <div className={classes.movieDetailsInfo}>
        <h2 style={{ color: "white", marginBottom: "1rem" }}>
          {result.Title} {result.Year}
        </h2>
        <Typography style={{ color: "white", marginBottom: "1rem" }}>
          <strong>Genre:</strong> {result.Genre}
        </Typography>
        <Typography style={{ color: "white", marginBottom: "1rem" }}>
          <strong>Movie Plot:</strong> {result.Plot}
        </Typography>
        <Typography style={{ color: "white", marginBottom: "1rem" }}>
          <strong>Cast:</strong> {result.Actors}
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => props.history.push("/")}
          >
            <ArrowBackIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
