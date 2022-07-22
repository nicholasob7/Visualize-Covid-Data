import React, { useEffect, useState } from 'react';
import api from "../api";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Radar } from 'react-chartjs-2';
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

export default function RadarChart() {
    const [countries, setCountries] = useState([]);
      
    useEffect(()=> {
      api.getCountriesData().then((data) => setCountries(data))
    }, []);
      //    console.log(countries);  
         let Australia, NewZealand, Newzealanddata, Australiadata 
         let piediv = <div>sameera</div>
      for (const contry of countries) {
        
          if (contry.country =="Australia") {
              Australia = contry
              
          }
          if (contry.country =="New Zealand") {
              NewZealand = contry
              
          }
          
      }
          
      console.log(Australia, NewZealand);   
        const labels = countries.map((label) => label.countries);  
        if (NewZealand) {
        
       
            Newzealanddata = {
               labels: [ 'Recoverd', 'Active','Death','Population', 'Cases', 'Tests'],
             
           
               datasets: [
                  {
                   label : "NewZealnad Data",
                   data: [NewZealand.recovered, NewZealand.active, NewZealand.deaths,NewZealand.population,NewZealand.cases, NewZealand.tests],
                   fill: true,
                   backgroundColor: 'rgba(255, 99, 132, 0.2)',
                   borderColor: 'rgb(255, 99, 132)',
                   pointBackgroundColor: 'rgb(255, 99, 132)',
                   pointBorderColor: '#fff',
                   pointHoverBackgroundColor: '#fff',
                   pointHoverBorderColor: 'rgb(255, 99, 132)'
                   },{
                      label : "Australia Data",
                      data: [ Australia.recovered, Australia.active, Australia.deaths, Australia.population,Australia.cases,Australia.tests],
                      fill: true,
                      backgroundColor: 'rgba(54, 162, 235, 0.2)',
                      borderColor: 'rgb(54, 162, 235)',
                      pointBackgroundColor: 'rgb(54, 162, 235)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgb(54, 162, 235)'
                    },
                ],
                           
            }   
               piediv = <div><Radar data={Newzealanddata}/>
                {/* <Radar data={Australiadata}/>  */}
               {/* <Pie data={Activedata}/>
               <Pie data={Recovereddata}/> */}
               </div>
        }       
                       
           return (
           <div className="App" style={{width:'60%', height:'60%'}}>
             <h1>Covid19 Australia VS NewZealand</h1>
             {piediv}
             
           </div>
         );
       }
       