import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import api from "../api";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Deaths vs Recovered in Confirmed Cases - Disease.sh',
    }
  },
  // scales: {
  //   xAxes: [{
  //    type: 'time',
  //   }]
  // }
};

const labels = ['January 2020', 'February 20', 'March 20', 'April 20', 'May 20', 'June 20', 
'July 20', 'August 20', 'September 20', 'October 20', 'November 20', 'December 20'];


export const my_data = {
  labels,
  datasets: [
    {
      label: 'Deaths',
      data: labels.map(() => 1),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Recovered',
      data: labels.map(() => 2),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
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
        data={my_data}
      />
    </div>
  );
}