import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const ref = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setInput(ref.current.value);
    navigate("/results");
  };
  return (
    <div className="pageframe search">
      <form onSubmit={handleSubmit}>
        <label>Search website types</label>
        <br />
        <input type="text" ref={ref}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
