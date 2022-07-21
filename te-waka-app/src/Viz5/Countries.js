import { useEffect, useState } from "react";
import api from "../api";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import { isDOMComponent } from "react-dom/test-utils";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



export default function Countries() {
    const [countries, setCountries] = useState([]);



useEffect(() => {
    api.getCountriesTotals()
    .then((data) => setCountries(data))
}, []);


    const labels = countries.map((label) => label.countries);

    const data = {
        labels: [{ labels }],
        datasets: [
        {
            label: "Active",
            data: countries.map((countries) => countries.testsPerOneMillion),
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
          // Change color when hover
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
        },

        // {
        //     label: "Critical",
        //     data: countries.map((countries) => countries.population),
        //     backgroundColor: "rgba(155,231,91,0.2)",
        //     borderColor: "rgba(255,99,132,1)",
        //     borderWidth: 2,
        //     hoverBackgroundColor: "rgba(255,99,132,0.4)",
        //     hoverBorderColor: "rgba(255,99,132,1)",
        // },
        
    ]
};

    return (
        <div className="App">
            <h1>Covid-19 active in countries</h1>
            <Bar data={data} />

        </div>
    );
}
