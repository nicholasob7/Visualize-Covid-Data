import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import api from "../../api";
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
  LogarithmicScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Cases, Deaths, Recovered - Disease.sh",
    },
  },
  scales: {
    y: {
      type: "logarithmic",
      position: "right", // `axis` is determined by the position as `'y'`
    },
  },
};

const labels = [];

export const myData = {
  labels,
  datasets: [
    {
      label: "Cases",
      data: labels.map(() => []),
      borderColor: "rgb(0, 0, 255)",
      backgroundColor: "rgba(0, 0, 255, 0.5)",
    },
    {
      label: "Deaths",
      data: labels.map(() => []),
      borderColor: "rgb(255, 0, 0)",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
    },
    {
      label: "Recovered",
      data: labels.map(() => []),
      borderColor: "rgb(0, 255, 0)",
      backgroundColor: "rgba(107,142,35, 0.5)",
    },
  ],
};

export default function ApiLineExample() {
  const [data, setData] = useState(myData);

  const transformDatetimeFormat = (input_date) => {
    return moment(input_date, "M-D-YY").format("YYYY-MM-DD");
  };

  const transformDictIntoXYList = (input_dict) => {
    let transformed_dict = {};
    for (const [key, value] of Object.entries(input_dict)) {
      transformed_dict[transformDatetimeFormat(key)] = value;
    }
    // console.log(transformed_dict);
    let output_list = [];
    for (const [key, value] of Object.entries(transformed_dict)) {
      output_list.push({ x: key, y: value });
    }
    // console.log(output_list);
    return output_list;
  };

  const getPositionList = (input_xy_dict_list, key) => {
    let output_x_list = [];
    for (const item of input_xy_dict_list) {
      output_x_list.push(item[key]);
    }
    // console.log(output_x_list);
    return output_x_list;
  };

  useEffect(() => {
    api.getHistoricalData().then((response) => {
      const data = response;
      // console.log(response)
      // debugger pauses code run and opens a debugger in browser.
      const cases = transformDictIntoXYList(data["cases"]);
      const deaths = transformDictIntoXYList(data["deaths"]);
      const recovered = transformDictIntoXYList(data["recovered"]);
      const labels = getPositionList(cases, "x");
      const input_data = {
        labels: labels,
        cases: getPositionList(cases, "y"),
        deaths: getPositionList(deaths, "y"),
        recovered: getPositionList(recovered, "y"),
      };
      setData({
        labels: input_data.labels,
        datasets: [
          {
            label: "Cases",
            data: input_data.cases,
            borderColor: "rgb(0, 0, 255)",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
          },
          {
            label: "Deaths",
            data: input_data.deaths,
            borderColor: "rgb(255, 0, 0)",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
          },
          {
            label: "Recovered",
            data: input_data.recovered,
            borderColor: "rgb(0, 255, 0)",
            backgroundColor: "rgba(107,142,35, 0.5)",
          },
        ],
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App" style={{ width: '90%', height: '90%' }}>
      <h1>Global Logarithmic Scale</h1>
      <Line
        options={options}
        data={data}
      // setData={setData}
      />
    </div>
  );
}
