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
import bg from '../image/cinema2.jpg'

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
      <Typography className={classes.bannerText} color="primary">
        SEARCH MOVIES...
      </Typography>
      <Search
        handleInput={handleInput}
        searchQuery={searchQuery}
        handleYear={handleYear}
        handlePlot={handlePlot}
      />
      <img src={bg} alt="bg" className={classes.cinema}/>
      {res.length > 0 && <div className={classes.homeNavigation}>
        <div style={{ display: "flex" }}>
          <div className={classes.homeNavItems}>
            <Typography>Sort by Title</Typography>
            <div>
              <Button onClick={handleTitleAsc} disabled={res.length < 1}>
                <ArrowUpwardIcon style={{color:'white'}} />
              </Button>
              <Button onClick={handleTitleDes} disabled={res.length < 1}>
                <ArrowDownwardIcon style={{color:'white'}} />
              </Button>
            </div>
          </div>
          <div className={classes.homeNavItems}>
            <Typography>Sort by Year</Typography>
            <div>
              <Button onClick={handleYearAsc} disabled={res.length < 1}>
                <ArrowUpwardIcon style={{color:'white'}} />
              </Button>
              <Button onClick={handleYearDes} disabled={res.length < 1}>
                <ArrowDownwardIcon style={{color:'white'}} />
              </Button>
            </div>
          </div>
          <div className={classes.homeNavItems}>
            <Typography>Sort by imdbID</Typography>
            <div>
              <Button onClick={handleImdbidAsc} disabled={res.length < 1}>
                <ArrowUpwardIcon style={{color:'white'}} />
              </Button>
              <Button onClick={handleImdbidDes} disabled={res.length < 1}>
                <ArrowDownwardIcon style={{color:'white'}} />
              </Button>
            </div>
          </div>
          <div className={classes.homeNavItems}>
            <Typography>Sort by Type</Typography>
            <div>
              <Button onClick={handleTypeAsc} disabled={res.length < 1}>
                <ArrowUpwardIcon style={{color:'white'}} />
              </Button>
              <Button onClick={handleTypeDes} disabled={res.length < 1}>
                <ArrowDownwardIcon style={{color:'white'}}/>
              </Button>
            </div>
          </div>
        </div>
      </div>}
      {loading ? (
        <CircularProgress
          style={{ display: "flex", justifyContent: "center" }}
        />
      ) : (
        <div className={classes.homeResult}>
          {err ? (
            <Typography variant="h3" color="secondary" style={{fontWeight:'900'}}>
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
            disabled={res.length < 9}
            onClick={load}
            variant="contained"
            color="primary"
            className={classes.loadBtn}
          >
            {res.length < 10 ? "Nothing to load" : "Load more movies"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
