import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { useStyles } from "../styles";
import { Typography, Button } from "@material-ui/core";
import { apiKey } from "../config";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useSelector } from "react-redux";

const MovieDetails = (props) => {
  const plot = useSelector(state=>state.plot)
  const classes = useStyles();
  const [result, setResult] = useState("");
  console.log(props);
  const id = props.match.params.movieId;
  
  useEffect(() => {
    const getDetails = async () => {
      const result = await Axios.get(apiKey + "&i=" + id + "&plot=" + plot);
      console.log(result);
      const res = result.data;
      setResult(res);
    };
    getDetails();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "70%",
        margin: "2rem auto",
        padding: "0.5rem",
        justifyContent: "center",
      }}
    >
      <div style={{ margin: "1rem", flex: "1" }}>
        <img src={result.Poster} alt="poster" />
      </div>
      <div
        style={{
          flex: "2",
          maxHeight: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h2>
          {result.Title} {result.Year}
        </h2>
        <Typography>
          <strong>Genre:</strong> {result.Genre}
        </Typography>
        <Typography>
          <strong>Movie Plot:</strong> {result.Plot}
        </Typography>
        <Typography>
          <strong>Cast:</strong> {result.Actors}
        </Typography>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
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
