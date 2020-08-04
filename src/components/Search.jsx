import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Button, FormControl, InputLabel, Select } from "@material-ui/core";

const Search = ({ handleInput, searchQuery, handleYear, handlePlot }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "1rem auto",
      }}
    >
      <input
        type="search"
        placeholder="By title"
        onChange={handleInput}
        style={{
          minWidth: "20%",
          height: "40px",
          padding: "5px",
          border: "1px solid lightblue",
          outlineColor: "palegreen",
          alignItems: "center",
          fontSize: "1rem",
          textAlign: "center",
          borderRadius: "3px",
          marginBottom:'2rem',
          margin:'2px'
        }}
      />
      <input type="number" placeholder='by year...' onChange={handleYear} style={{
          width: "100px",
          height: "40px",
          padding: "5px",
          border: "1px solid lightblue",
          outlineColor: "palegreen",
          alignItems: "center",
          fontSize: "1rem",
          textAlign: "center",
          borderRadius: "3px",
          margin:'2px',
          marginBottom:'2rem',

        }}/>
   
          
        <select  onChange={handlePlot} style={{height:"40px", margin:'2px', borderRadius:"3px"}}>
          <option>full</option>
          <option>short</option>
        </select>

      <Button variant="contained" color="primary" style={{height:'40px', width:'100px',  margin:'2px'}}>
        <SearchIcon onClick={searchQuery} />
      </Button>
    </div>
  );
};

export default Search;
