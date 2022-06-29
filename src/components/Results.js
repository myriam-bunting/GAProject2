import React, { useState, useEffect } from "react";

const Results = (props) => {
  const [test, setTest] = useState([]);

  const fetchTest = async (testUrl) => {
    const url = `http://observatorioweb.ups.edu.ec/oaw/srv/wcag/json/conformidad/?url=${testUrl}&key=64ff0627-a5bf-494f-b890-598f333a8ae6`;
    // const url = `http://observatorioweb.ups.edu.ec/oaw/srv/wcag/json/conformidad/?url=https://www.google.com/&key=64ff0627-a5bf-494f-b890-598f333a8ae6`;
    // const url = `http://observatorioweb.ups.edu.ec/oaw/srv/wcag/json/conformidad/?url=http://dominio.com/mipagina.html&key=64ff0627-a5bf-494f-b890-598f333a8ae6`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(`this is my test ${data}`);
    setTest(data);
  };
  useEffect(() => {
    // fetchTest("https://beaccessible.com/services/");
    console.log(`test state changed`);
  }, [test]);

  return (
    <div>
      {/* {props.results && fetchTest(props.results)} */}
      {/* <p>{fetchTest("https://www.google.com/")}</p> */}
    </div>
  );
};

//return level from the test to display
export default Results;
