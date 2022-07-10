import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import api from "../api";
import moment from "moment";

export const options = {
  responsive: true,
  scales: {
    xAxes: [{
     type: 'time',
    }]
  }
};

export default function ApiLineExample() {
  const [data, setData] = useState([]);

  const transformDatetimeFormat = (input_date) => {
    return moment(input_date, "M-D-YY").format("YYYY-MM-DD")
  };

  const transformDictIntoXYList = (input_dict) => {
    let transformed_dict = {}
    for (const [key, value] of Object.entries(input_dict)) {
      transformed_dict[transformDatetimeFormat(key)] = value;
    }
    console.log(transformed_dict)
    let output_list = []
    for (const [key, value] of Object.entries(transformed_dict)) {
      output_list.push({"x": key, "y": value})
    }
    console.log(output_list)
    return transformDictIntoXYList
  }

  useEffect(() => {
    api.getHistoricalData().then((response) => {
      const data = response;
      const cases = transformDictIntoXYList(data["cases"])
      const recovered = transformDictIntoXYList(data["recovered"])
      setData({
        "cases": cases, "recovered": recovered
      });
    });
  }, []);

  return (
    <div className="App">
      <h1>Historical data</h1>
      <Line
        options={options}
      />
    </div>
  );
}