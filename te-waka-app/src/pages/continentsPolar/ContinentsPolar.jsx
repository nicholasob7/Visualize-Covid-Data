import { useEffect, useState } from 'react';
import api from "../../api";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function ContinentsPolar() {
    const [continents, setContinents] = useState([]);

    useEffect(() => {
        api.getContinentsData()
            .then((data) => setContinents(data))
    }, []);

    const data = {
        labels: ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'],
        datasets: [
            {
                label: 'Cases',
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
        ],
    };

    return (
        <div className App="app">
            <h1>Total Cases By Continent</h1>
            <PolarArea data={data} />;
        </div>
    );
}

