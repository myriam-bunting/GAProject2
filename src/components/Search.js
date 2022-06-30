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
    <div className="pageframe search" aria-hidden="true">
      <form onSubmit={handleSubmit}>
        <label>Search website types</label>
        <br />
        <select className="select" type="text" ref={ref}>
          <option value="social">social</option>
          <option value="news">news</option>
          <option value="blog">blog</option>
          <option value="recipes">recipes</option>
          <option value="sport">sport</option>
        </select>
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
