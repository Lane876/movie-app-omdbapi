import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import SearchResult from "./components/SearchResult";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import { apiKey } from "./config";
import { useSelector, useDispatch } from "react-redux";
import { getPlot } from "./redux/plotAction";
import { getError } from "./redux/errorAction";
import { getResults } from "./redux/resultAction";

function App() {
  const res = useSelector((state) => state.results.results);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

  const searchQuery = async () => {
    setLoading(true);
    try {
      const data = await Axios.get(
        apiKey + "&s=" + search + "&y=" + year + `&page=${currentPage}`
        // apiKey + "&s=" + search + "&y=" + year + `&page=${currentPage}`
      );
      setCurrentPage(currentPage + 1);

      let results = data.data.Search;
      setLoading(false);
      dispatch(getResults([...res, ...results]));
    } catch (error) {
      dispatch(getError("MOVIE NOT FOUND..."));
      setLoading(false);
    }
  };

  const load = async () => {
    try {
      const data = await Axios.get(
        apiKey + "&s=" + search + "&y=" + year + `&page=${currentPage}`
      );
      setCurrentPage(currentPage + 1);
      const response = data.data.Search;
      dispatch(getResults([...res, ...response]));
    } catch (error) {
      console.log(error);
    }
  };

  function handleInput(event) {
    setSearch(event.target.value);
    setCurrentPage(1)
    dispatch(getResults([]));
    dispatch(getError(false));
  }

  function handleYear(e) {
    setYear(e.target.value);
  }

  function handlePlot(e) {
    let plot = e.target.value;
    dispatch(getPlot(plot));
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home
            res={res}
            loading={loading}
            SearchResult={SearchResult}
            load={load}
            handleInput={handleInput}
            handleYear={handleYear}
            searchQuery={searchQuery}
            handlePlot={handlePlot}
            path="/"
          />
        </Route>
        <Route path="/:movieId" component={MovieDetails} />
      </Switch>
    </div>
  );
}

export default App;
