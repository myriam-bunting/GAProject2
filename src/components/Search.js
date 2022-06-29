import React, { useState, useRef } from "react";

const Search = (props) => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(ref.current.value);
    setResults(
      props.data.filter((item) => {
        return item.type == ref.current.value;
      })
    );
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <label>Search website types</label>
        <br />
        <input type="text" ref={ref}></input>
        <button type="submit">Search</button>
      </form>
      <p>{results.map((item) => item.name)}</p>
    </div>
  );
};

export default Search;
