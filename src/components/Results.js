import React, { useEffect, useState } from "react";
import Display from "./Display";

const Results = (props) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filteredData = props.data.filter((i) => {
      return i.fields.type.stringValue === props.input;
    });
    setResults(filteredData);
    console.log(props.data, props.input);
    console.log(filteredData);
  }, [props.data, props.input]);

  return (
    <div className="results-text">
      {/* {results.map((item, i) => {
        return (
          <li key={i}>
            {item.fields.name.stringValue}
            {item.fields.accScore.stringValue}
          </li>
        );
      })} */}
      <Display results={results} />
    </div>
  );
};

export default Results;
