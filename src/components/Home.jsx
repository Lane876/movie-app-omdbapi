import React from "react";
import { Typography, Button, CircularProgress } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Search from "./Search";
import { useStyles } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import {
  sortResutlsDes,
  sortResutlsAsc,
  sortYearAsc,
  sortYearDes,
  sortImdbidDes,
  sortImdbidAsc,
  sortTypeDes,
  sortTypeAsc,
} from "../redux/resultAction";

const Home = ({
  res,
  loading,
  load,
  SearchResult,
  handleInput,
  searchQuery,
  handleYear,
  handlePlot,
}) => {
  const err = useSelector((state) => state.error.error);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleTitleAsc = () => {
    const newArr = [];
    res.map((e) => newArr.push(e));

    dispatch(sortResutlsAsc(newArr));
  };
  const handleTitleDes = () => {
    const newArr = [];
    res.map((e) => newArr.push(e));

    dispatch(sortResutlsDes(newArr));
  };
  const handleYearAsc = () => {
    const newArr = [];
    res.map((e) => newArr.push(e));

    dispatch(sortYearAsc(newArr));
  };
  const handleYearDes = () => {
    const newArr = [];
    res.map((e) => newArr.push(e));

    dispatch(sortYearDes(newArr));
  };
  const handleImdbidAsc = () => {
    const newArr = [];
    res.map((e) => newArr.push(e));

    dispatch(sortImdbidAsc(newArr));
  };
  const handleImdbidDes = () => {
    const newArr = [];
    res.map((e) => newArr.push(e));

    dispatch(sortImdbidDes(newArr));
  };
  const handleTypeAsc = () => {
    const newArr = [];
    res.map((e) => newArr.push(e));
    dispatch(sortTypeAsc(newArr));
  };
  const handleTypeDes = () => {
    const newArr = [];
    res.map((e) => newArr.push(e));
    dispatch(sortTypeDes(newArr));
  };

  return (
    <div>
      <a href="/" style={{ textDecoration: "none", color: "white" }}>
        <Typography variant='h3'
          style={{
            fontWeight: "900",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          SEARCH MOVIES...
        </Typography>
      </a>
      <Search
        handleInput={handleInput}
        searchQuery={searchQuery}
        handleYear={handleYear}
        handlePlot={handlePlot}
      />
      {res.length > 0 && (
        <div className={classes.homeNavigation}>
          <div style={{ display: "flex" }}>
            <div className="media">
              <div className={classes.homeNavItems}>
                <Typography>Sort by Title</Typography>
                <div>
                  <Button onClick={handleTitleAsc} disabled={res.length < 1}>
                    <ArrowUpwardIcon style={{ color: "white" }} />
                  </Button>
                  <Button onClick={handleTitleDes} disabled={res.length < 1}>
                    <ArrowDownwardIcon style={{ color: "white" }} />
                  </Button>
                </div>
              </div>
              <div className={classes.homeNavItems}>
                <Typography>Sort by Year</Typography>
                <div>
                  <Button onClick={handleYearAsc} disabled={res.length < 1}>
                    <ArrowUpwardIcon style={{ color: "white" }} />
                  </Button>
                  <Button onClick={handleYearDes} disabled={res.length < 1}>
                    <ArrowDownwardIcon style={{ color: "white" }} />
                  </Button>
                </div>
              </div>
            </div>
            <div className="media">
              <div className={classes.homeNavItems}>
                <Typography>Sort by imdbID</Typography>
                <div>
                  <Button onClick={handleImdbidAsc} disabled={res.length < 1}>
                    <ArrowUpwardIcon style={{ color: "white" }} />
                  </Button>
                  <Button onClick={handleImdbidDes} disabled={res.length < 1}>
                    <ArrowDownwardIcon style={{ color: "white" }} />
                  </Button>
                </div>
              </div>
              <div className={classes.homeNavItems}>
                <Typography>Sort by Type</Typography>
                <div>
                  <Button onClick={handleTypeAsc} disabled={res.length < 1}>
                    <ArrowUpwardIcon style={{ color: "white" }} />
                  </Button>
                  <Button onClick={handleTypeDes} disabled={res.length < 1}>
                    <ArrowDownwardIcon style={{ color: "white" }} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading ? (
        <CircularProgress
          style={{ display: "flex", justifyContent: "center" }}
        />
      ) : (
        <div className={classes.homeResult}>
          {err.length ? (
            <Typography
              variant="h3"
              style={{
                fontWeight: "900",
                color: "#ffff",
                marginTop:'2rem',
                textAlign:'center'
              }}
            >
              {err}
            </Typography>
          ) : (
            false
          )}
          {res.map((res, index) => (
            <SearchResult key={index} res={res} />
          ))}
        </div>
      )}
      {res.length > 0 && (
        <div className={classes.loadMoreBtn}>
          <Button
            fullWidth
            disabled={err}
            onClick={load}
            variant="contained"
            color="primary"
            className={classes.loadBtn}
          >
            {err ? "Nothing to load" : "Load more movies"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
