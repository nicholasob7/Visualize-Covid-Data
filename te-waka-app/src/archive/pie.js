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
       let Austerlia, NewZealand, Newzealanddata, Austerliadata 
       let piediv = <div>sameera</div>
    for (const contry of countries) {
        if (contry.country =="Australia") {
            Austerlia = contry
            
        }
        if (contry.country =="New Zealand") {
            NewZealand = contry
            
        }
        
    }
        
    console.log(Austerlia, NewZealand);   
      const labels = countries.map((label) => label.countries);
       if (Austerlia) {
        
       
     Newzealanddata = {
        labels: ['NewZealand Death', 'NewZealand Recoverd', 'NewZealand Population', 'NewZealand Active'],
      
    
        datasets: [
          {
            label : "Test per one Million",
            data: [NewZealand.deaths, NewZealand.recovered, NewZealand.population, NewZealand.active],
                backgroundColor:[
                  'red',
                  'blue',
                  'yellow',
                  'gray'
                ]
            },
            
          ],
           
        }
     Austerliadata = {
            labels: ['Austerlia Death', 'Austerlia Recovered', 'Austerlia Papulation', 'Austerlia Active'],
          
        
            datasets: [
              
                {
                    label : "Test per one Million",
                    data: [Austerlia.deaths, Austerlia.recovered, Austerlia.population, Austerlia.active],
                        backgroundColor:[
                          'red',
                          'blue',
                          'yellow',
                          'gray'
                        ]
                    },
              ],
               
        }
        
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
        piediv = <div><Pie data={Newzealanddata}/>
        <Pie data={Austerliadata}/>
        {/* <Pie data={Activedata}/>
        <Pie data={Recovereddata}/> */}
        </div>
       }       
                
    return (
    <div className="App" style={{width:'30%', height:'30%'}}>
      <h1>Covid19 testing in Contries</h1>
      {piediv}
      
    </div>
  );
}
