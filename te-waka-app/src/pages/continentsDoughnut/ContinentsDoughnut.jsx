import { useEffect, useState } from "react";
import api from "../../api";
import "./continentsdoughnut.scss"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function ContinentsDoughnut() {
    const [continents, setContinents] = useState([]);




    useEffect(() => {
        api.getContinentsData()
            .then((data) => setContinents(data))
    }, []);

    const data = {
        labels: ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'],
        datasets: [
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
        <div className="App" style={{ width: '45%', height: '45%' }}>
            <div classname="text-violet-500"
            >Covid19 Deaths per Continent
            </div>
            <Doughnut data={data}
            />

        </div>
    );
}
