import React, { useEffect, useState } from 'react';
import api from "../api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function PieChart() {
    const [countries, setCountries] = useState([]);
    
    useEffect(()=> {
        api.getCountriesData().then((data) => setCountries(data))
    }, []);
    //    console.log(countries);  
        let Australia, NewZealand, Deathdata, Populationdata, Activedata, Recovereddata
        let piediv = <div>sameera</div>
    for (const country of countries) {
        if (country.country ==="Australia") {
            Australia = country
            
        }
        if (country.country ==="New Zealand") {
            NewZealand = country
            
        }
        
    }
        
    console.log(Australia, NewZealand);   
        const labels = countries.map((label) => label.countries);
        if (Australia) {
        
        Deathdata = {
            labels: ['NewZealand', 'Australia'],
        
    
        datasets: [
            {
            label : "Test per one Million",
            data: [NewZealand.deaths,Australia.deaths],
                backgroundColor:[
                    'red',
                    'blue',
                    'yellow'
                ]
            },
            
        ],

        }
    Populationdata = {
            labels: ['NewZealand', 'Australia'],
            datasets: [

                {
                    label : "Test per one Million",
                    data: [NewZealand.population,Australia.population],
                        backgroundColor:[
                            'red',
                            'blue',
                            'yellow'
                        ]
                    },
            ],

        }

            piediv = <div><Pie data={Deathdata}/>
            <Pie data={Populationdata}/></div>
        
    Recovereddata = {
            labels: ['NewZealand', 'Australia'],

        
            datasets: [
            {
                label : "Test per one Million",
                data: [NewZealand.recovered,Australia.recovered],
                    backgroundColor:[
                        'red',
                        'blue',
                        'yellow'
                    ]
                },
                
            ],

        } 
        Activedata = {
                    labels: ['NewZealand', 'Australia'],
                
                
                    datasets: [
                    {
                        label : "Test per one Million",
                        data: [NewZealand.active,Australia.active],
                            backgroundColor:[
                            'red',
                            'blue',
                            'yellow'
                            ]
                        },
                        
                    ],
                    
        }  
        piediv = <div><Pie data={Deathdata}/>
        <Pie data={Populationdata}/>
        <Pie data={Activedata}/>
        <Pie data={Recovereddata}/>
        </div>
        }       
                
    return (
    <div className="App" style={{width:'30%', height:'30%'}}>
        <h1>Covid19 testing in Countries</h1>
        {piediv}
        
        </div>
    );
}
