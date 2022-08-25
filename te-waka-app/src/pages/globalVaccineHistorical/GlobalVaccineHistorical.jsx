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
} from "chart.js";

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
      position: "top",
    },
    title: {
      display: true,
      text: "Vaccinations Total, Daily, Total per 100 cases, Daily per million of World Population - Disease.sh",
    },
  },
  scales: {
    xAxis: [
      {
        type: "time",
        time: {
          unit: "day",
        },
      },
    ],
  },
};

const labels = [0, 1];

export const vaccineData = {
  labels,
  datasets: [
    {
      label: "total",
      data: labels.map(() => []),
      borderColor: "rgb(0, 0, 255)",
      backgroundColor: "rgba(0, 0, 255, 0.5)",
    },
    {
      label: "daily",
      data: labels.map(() => []),
      borderColor: "rgb(255, 0, 0)",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
    },
    {
      label: "totalPerHundred",
      data: labels.map(() => []),
      borderColor: "rgb(0, 255, 0)",
      backgroundColor: "rgba(107,142,35, 0.5)",
    },
    {
      label: "dailyPerMillion",
      data: labels.map(() => []),
      borderColor: "rgb(0, 255, 0)",
      backgroundColor: "rgba(107,142,35, 0.5)",
    },
  ],
};

export default function PlotExample() {
  const [data, setData] = useState(vaccineData);

  const transformDatetimeFormat = (input_date) => {
    return moment(input_date, "M-D-YY").format("YYYY-MM-DD");
  };

  const transformListIntoXYList = (input_list_of_dict, key) => {
    console.log(input_list_of_dict);
    let transformed_dict = {};
    for (const i in input_list_of_dict) {
      transformed_dict[transformDatetimeFormat(input_list_of_dict[i]["date"])] =
        input_list_of_dict[i][key];
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
    api.getCoverageData().then((response) => {
      const data = response;
      const total = transformListIntoXYList(data, "total");
      const daily = transformListIntoXYList(data, "daily");
      const totalPerHundred = transformListIntoXYList(data, "totalPerHundred");
      const dailyPerMillion = transformListIntoXYList(data, "dailyPerMillion");
      const labels = getPositionList(total, "x");
      const input_data = {
        labels: labels,
        total: getPositionList(total, "y"),
        daily: getPositionList(daily, "y"),
        totalPerHundred: getPositionList(totalPerHundred, "y"),
        dailyPerMillion: getPositionList(dailyPerMillion, "y"),
      };
      setData({
        labels: input_data.labels,
        datasets: [
          {
            label: "total",
            data: input_data.total,
            borderColor: "rgb(0, 0, 255)",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
          },
          {
            label: "daily",
            data: input_data.daily,
            borderColor: "rgb(255, 0, 0)",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
          },
          {
            label: "totalPerHundred",
            data: input_data.totalPerHundred,
            borderColor: "rgb(0, 255, 0)",
            backgroundColor: "rgb(0, 255, 0)",
          },
          {
            label: "dailyPerMillion",
            data: input_data.dailyPerMillion,
            borderColor: "rgba(107,142,35, 0.5)",
            backgroundColor: "rgba(107,142,35, 0.5)",
          },
        ],
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App" style={{ width: '90%', height: '90%' }}>
      <h1>Global Vaccinations</h1>
      <Line
        options={options}
        data={data}
      // setData={setData}
      />
    </div>
  );
}
