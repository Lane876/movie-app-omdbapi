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

function App() {
  const movieplot = useSelector(state=>state.plot)
  console.log(movieplot);
  const dispatch = useDispatch()
  
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState([]);
  const [count, setCount] = useState(1);
  const [year, setYear] = useState("");

  const searchQuery = async () => {
    try {
      const data = await Axios.post(
        apiKey + "&s=" + search + "&y=" + year + `&page=${count}`
      );
      let results = data.data.Search;
      console.log(results);
      setResult([...result, ...results]);
    } catch ({ error }) {
      setError(error);
      console.log(error);
    }
  };

  function load() {
    setCount(count + 1);
    searchQuery(count);
  }

  function handleInput(event) {
    setSearch(event.target.value);

  }

  function handleYear(e) {
    setYear(e.target.value);
  }

  function handlePlot(e) {
    let plot = e.target.value;
      dispatch(getPlot(plot))
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home
            error={error}
            result={result}
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
