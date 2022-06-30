import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Results from "./components/Results";
import Links from "./components/Links";
// import Display from "./components/Display";

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

  const [input, setInput] = useState("");
  const fetchData = async () => {
    const url =
      "https://firestore.googleapis.com/v1/projects/projecta11y/databases/(default)/documents/domains?pageSize=200";
    const res = await fetch(url);
    const data = await res.json();

    setData(data.documents);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">a11y</h1>
      </div>
      <div className="sub-header">
        <h2 className="title">Accessibility, where can we do better</h2>
      </div>
      <div>
        <NavBar />
      </div>

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search setInput={setInput} />} />
          <Route
            path="/results"
            element={<Results input={input} data={data} />}
          />
          <Route path="/links" element={<Links />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
