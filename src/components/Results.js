import React, { useEffect, useState } from "react";

const Results = (props) => {
  const [results, setResults] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredData = props.data.filter((i) => {
      return i.fields.type.stringValue === props.input;
    });
    setResults(filteredData);
    console.log(props.data, props.input);
    console.log(filteredData);
  }, [props.data, props.input]);

  return (
    <div>
      {results.map((item, i) => {
        return (
          <li key={i}>
            {item.fields.name.stringValue}
            {item.fields.accScore.stringValue}
          </li>
        );
      })}
    </div>
  );
};

export default Results;
