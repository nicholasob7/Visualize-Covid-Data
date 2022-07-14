import { useEffect, useState } from "react";
import api from "../api";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function DoughnutChart() {
    const [continents, setContinents] = useState([]);


debugger

useEffect(() => {
    api.getContinentsData()
    .then((data) => setContinents(data))
}, []);

    const data = {
        labels: ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'],
        datasets: [
            {
            label: "Cases",
            data: continents.map((continent) => continent.cases),
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
        },
        {
            label: "Deaths",
            data: continents.map((continent) => continent.deaths),
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
        },
    ]
};

    return (
        <div className="App">
            <h1>Total Cases vs Deaths By Continent</h1>
            <Doughnut data={data} 
            />

        </div>
    );
}
