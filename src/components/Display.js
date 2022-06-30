import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

function Display(props) {
  // const [color, setColor] = useState("2a9ed6");
  const barColors = [
    "#2a9ed6",
    "#ef3935",
    "#20a67a",
    "#efa92e",
    "purple",
    "#ef3935",
  ];

  const xValues = props.results.map((data) => {
    return data.fields.name.stringValue;
  });
  // console.log(props.results);
  const accScoreCheck = (data) => {
    if (data.fields.accScore.stringValue >= "90") {
      // setColor("#ef3935");
      console.log("over 90");
    } else if (data.fields.accScore.stringValue >= "80") {
      // setColor("#20a67a");
      console.log("below 80");
    } else {
      // setColor("#20a67a");
      console.log("less than 80");
    }
  };

  const yValues = props.results.map((data) => {
    console.log(data);
    accScoreCheck(data);
    return data.fields.accScore.stringValue;
  });

  return (
    <div className=" pageframe chart" id="bar">
      <Bar
        data={{
          labels: xValues,
          datasets: [{ backgroundColor: barColors, data: yValues }],
        }}
        options={[{ legend: { display: false } }]}
      />
      <div className=" pageframe line chart">
        <Doughnut
          data={{
            labels: xValues,
            datasets: [{ backgroundColor: barColors, data: yValues }],
          }}
          options={[{ legend: { display: false } }]}
        />
      </div>
    </div>
  );
}

export default Display;
