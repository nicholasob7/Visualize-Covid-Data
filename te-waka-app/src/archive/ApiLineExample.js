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
  scales: {
    xAxis: [{
      type: 'time',
      time: {
        unit: 'day',
      }
    }],
    yAxis: [{
      type: [moment("20200320", "YYYYMMDD").fromNow()],
    }]
  }
};

const labels = ['March 20', 'April 20', 'May 20', 'June 20', 
'July 20', 'August 20', 'September 20', 'October 20', 'November 20', 'December 20', 'January 21'];
// const labels = [moment("20200320", "YYYYMMDD").fromNow()];

export const myData = {
  labels,
  datasets: [
    {
      label: 'Cases',
      data: labels.map(() => 1),
      borderColor: 'rgb(0, 0, 255)',
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
    },
    {
      label: 'Deaths',
      data: labels.map(() => 2),
      borderColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
    },
    {
      label: 'Recovered',
      data: labels.map(() => 3),
      borderColor: 'rgb(0, 255, 0)',
      backgroundColor: 'rgba(107,142,35, 0.5)',
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
      const deaths = transformDictIntoXYList(data["deaths"])
      const recovered = transformDictIntoXYList(data["recovered"])
      setData({
        "cases": cases, "deaths": deaths, "recovered": recovered
      })
    });
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Te Waka</h1>
      <Line
        options={options}
        data={myData}
        // setData={setData}
        
      />
    </div>
  );
}