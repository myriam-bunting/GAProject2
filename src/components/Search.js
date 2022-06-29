import React, { useState, useRef } from "react";

const Search = (props) => {
  const [input, setInput] = useState("");

  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(ref.current.value);
    const filteredData = props.data.filter((i) => {
      // console.log(i.fields.type.stringValue === ref.current.value);
      return i.fields.type.stringValue == ref.current.value;
    });
    console.log(filteredData);
    props.setResults(filteredData); //urls contained in results
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <label>Search website types</label>
        <br />
        <input type="text" ref={ref}></input>
        <button type="submit">Search</button>
      </form>
      <p></p>
    </div>
  );
};

export default Search;
