import React from "react";
import { Chart } from "react-chartjs-2";

function Display(props) {
  const barColors = ["green", "yellow", "pink"];
  const xValues = props.results.stringValue.name;
  console.log(props.results);
  const yValues = props.results.stringValue.accScore;
  const displayBarChart = new Chart("Bar", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{ backgroundColor: barColors, data: yValues }],
      options: {
        title: {
          display: true,
          text: "Lighthouse Ratings",
        },
      },
    },
  });

  return <div>{displayBarChart}</div>;
}

export default Display;
