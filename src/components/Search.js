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
      return i.fields.type.stringValue === ref.current.value;
    });
    props.setResults(filteredData);

    console.log(props.results); // nothing being returned from results
  };
  return (
    <div className="pageframe search">
      <form onSubmit={handleSubmit}>
        <label>Search website types</label>
        <br />
        <input type="text" ref={ref}></input>
        <button type="submit">Search</button>
      </form>
      <div>
        {/* {props.results &&
          props.results.map((item, i) => {
            <li key={i}>item.fields.name.stringValue</li>;
          })} */}
      </div>
    </div>
  );
};

export default Search;
