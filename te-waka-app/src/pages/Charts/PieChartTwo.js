import React, { useEffect, useState } from 'react';
import api from "../../api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function PieChart() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        api.getCountriesData().then((data) => setCountries(data))
    }, []);
    //    console.log(countries);  
    let Australia, NewZealand, NewZealandData, AustraliaData
    let piediv = <div>sameera</div>
    for (const country of countries) {
        if (country.country == "Australia") {
            Australia = country

        }
        if (country.country == "New Zealand") {
            NewZealand = country

        }

    }

    console.log(Australia, NewZealand);
    const labels = countries.map((label) => label.countries);
    if (NewZealand) {


        NewZealandData = {
            labels: ['Australia Deaths', 'Australia Recovered', 'Australia Active',
                'NewZealand Deaths', 'NewZealand Recovered', 'NewZealand Active'],


            datasets: [
                {
                    label: "Test per one Million",
                    data: [Australia.deaths, Australia.recovered, Australia.active,
                    NewZealand.deaths, NewZealand.recovered, NewZealand.active,],
                    backgroundColor: [
                        'red',
                        'blue',
                        'yellow',
                        'gray',
                        'green',
                        'pink'
                    ],
                    // borderWidth: 3,
                    // radius : 400
                },

            ],

        }
        //  Australiadata = {
        //         labels: ['Australia Death', 'Australia Recovered',  'Australia Active'],


        //         datasets: [

        //             {
        //                 label : "Test per one Million",
        //                 data: [Australia.deaths, Australia.recovered, Australia.population, Australia.active],
        //                     backgroundColor:[
        //                       'red',
        //                       'blue',
        //                       'yellow',
        //                       'gray'
        //                     ]
        //                 },
        //           ],

        //     }

        //  Recovereddata = {
        //       labels: ['NewZealand', 'Austerlia'],


        //       datasets: [
        //         {
        //           label : "Test per one Million",
        //           data: [NewZealand.recovered,Austerlia.recovered],
        //               backgroundColor:[
        //                 'red',
        //                 'blue',
        //                 'yellow',

        //               ]
        //           },

        //         ],


        //   } 
        // Activedata = {
        //           labels: ['NewZealand', 'Austerlia'],


        //           datasets: [
        //             {
        //               label : "Test per one Million",
        //               data: [NewZealand.active,Austerlia.active],
        //                   backgroundColor:[
        //                     'red',
        //                     'blue',
        //                     'yellow'
        //                   ]
        //               },

        //             ],

        //   }  
        piediv = <div><Pie data={NewZealandData} />
            {/* <Pie data={Australiadata}/> */}
            {/* <Pie data={Activedata}/>
        <Pie data={Recovereddata}/> */}
        </div>
    }

    return (
        <div className="App" style={{ width: '80%', height: '80%' }}>
            <h1>Covid19 testing in Countries</h1>
            {piediv}

        </div>
    );
}
