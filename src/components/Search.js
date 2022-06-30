import React, { useState, useRef } from "react";
import Results from "./Results";

const Search = (props) => {
  const [input, setInput] = useState("");

  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(ref.current.value);
    console.log(props.data);
    const filteredData = props.data.filter((i) => {
      console.log(i.fields.type.stringValue, ref.current.value);
      return i.fields.type.stringValue === ref.current.value;
    });
    props.setResults(filteredData);

    console.log(filteredData); //urls contained in results
  }; //search only returning 4 items. 4th item is a pointer
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
