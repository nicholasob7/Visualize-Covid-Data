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
        text: "Vaccinations per Confirmed Cases - Disease.sh",
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

const labels = []


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
        label: "totalPerMillion",
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
        api.getCoverageData().then((response) => {
        const data = response;
        const total = transformDictIntoXYList(data["total"]);
        const daily = transformDictIntoXYList(data["daily"]);
        const totalPerHundred = transformDictIntoXYList(data["totalPerHundred"]);
        const totalPerMillion = transformDictIntoXYList(data["totalPerMillion"]);
        const labels = getPositionList(total, "x");
        const input_data = {
            labels: labels,
            total: getPositionList(total, "y"),
            daily: getPositionList(daily, "y"),
            totalPerHundred: getPositionList(totalPerHundred, "y"),
            totalPerMillion: getPositionList(totalPerMillion, "y"),
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
                backgroundColor: "rgba(107,142,35, 0.5)",
            },
            {
                label: "totalPerMillion",
                data: input_data.totalPerMillion,
                borderColor: "rgb(0, 255, 0)",
                backgroundColor: "rgba(107,142,35, 0.5)",
            },
            ],
        });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="App">
        <h1>Te Waka</h1>
        <Line
            options={options}
            data={data}
            // setData={setData}
        />
        </div>
    );
}
