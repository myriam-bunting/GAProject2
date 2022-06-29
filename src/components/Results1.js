import React from "react";
import {
  entry,
  SitecheckerViewport,
  resultGroups,
  RunOnly,
  TagValue,
  string,
} from "a11y-sitechecker";

function Results() {
  const config = {
    resultsPath: "",
    resultsPathPerUrl: "",
    urlsToAnalyze: "",
    threshold: 5,
    timeout: 30,
    debugMode: false,
    viewports: SitecheckerViewport[""],
    resultTypes: resultGroups[""],
    runOnly: RunOnly | TagValue[""] | string[""],
    crawl: false,
    name: "myResults",
    json: true,
    resultsPath: "./Results.js",
  };

  const asyncFunc = async () => {
    const result = await entry(config, {}, "google.com");
    console.log(result);
    return result;
  };

  return <div></div>;
}

export default Results;
