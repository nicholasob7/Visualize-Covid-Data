import { useEffect, useState } from "react";
import api from "../../api";

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



export default function BarChart() {
    const [continents, setContinents] = useState([]);


    debugger

    useEffect(() => {
        api.getContinentsData()
            .then((data) => setContinents(data))
    }, []);


    const labels = continents.map((label) => label.continent);

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Test per one Million",
                data: continents.map((continent) => continent.testsPerOneMillion),
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 2,
                // Change color when hover
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
            },

            {
                label: "Total Population",
                data: continents.map((continent) => continent.population),
                backgroundColor: "rgba(155,231,91,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 2,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
            },

        ]
    };

    return (
        <div className="App" style={{ width: '90%', height: '90%' }}>
            <h1>Covid-19 testing in continents</h1>
            <Bar data={data}
            />

        </div>
    );
}
