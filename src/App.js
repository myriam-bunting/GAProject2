import React, { useEffect, useState } from "react";
import "./App.css";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Display from "./components/Display";
import Results from "./components/Results";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDOigQ97_-k21Sxw72Wg2UH9Fs_T4dLE14",
//   authDomain: "projecta11y.firebaseapp.com",
//   projectId: "projecta11y",
//   storageBucket: "projecta11y.appspot.com",
//   messagingSenderId: "669355353161",
//   appId: "1:669355353161:web:ffb8646d131be2e59ecb98",
// };

function App() {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const fetchData = async () => {
    const res = await fetch(
      "https://firestore.googleapis.com/v1/projects/projecta11y/databases/(default)/documents/domains"
    );
    const data = await res.json();
    // console.log(data.documents);
    setData(data.documents);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="container">
      <Home />
      <NavBar />
      <Search data={data} results={results} setResults={setResults} />

      {/* <p>{data.length ? data[0].fields.name.stringValue : null}</p> */}

      <Results />
      <Display />
    </div>
  );
}
export default App;
