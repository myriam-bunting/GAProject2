import React, { useEffect, useState } from "react";
import "./App.css";

import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";

import { collection, query, getDocs } from "firebase/firestore";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
// import Results from "./components/Results";
import Display from "./components/Display";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOigQ97_-k21Sxw72Wg2UH9Fs_T4dLE14",
  authDomain: "projecta11y.firebaseapp.com",
  projectId: "projecta11y",
  storageBucket: "projecta11y.appspot.com",
  messagingSenderId: "669355353161",
  appId: "1:669355353161:web:ffb8646d131be2e59ecb98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

function App() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const q = query(collection(db, "domains"));
    const querySnapshot = await getDocs(q);
    setData(doc.data);
    const newData = [];
    querySnapshot.forEach((doc) => {
      newData.push(doc.data());
    });
    setData(newData);
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
      <Search data={data} />
      {/* <Results /> */}
      <Display />
    </div>
  );
}
export default App;
