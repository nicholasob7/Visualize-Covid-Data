import React, { useEffect, useState } from 'react';
import api from "../api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function PieChart() {
  const [contries, setContries] = useState([]);
    
  useEffect(()=> {
    api.getCountriesData().then((data) => setContries(data))
  }, []);
    //    console.log(contries);  
       let Austerlia, NewZealand, Deathdata, Populationdata
       let piediv = <div>sameera</div>
    for (const contry of contries) {
        if (contry.country =="Australia") {
            Austerlia = contry
            
        }
        if (contry.country =="New Zealand") {
            NewZealand = contry
            
        }
        
    }
        
    console.log(Austerlia, NewZealand);   
      const labels = contries.map((label) => label.contries);
       if (Austerlia) {
        
       
     Deathdata = {
        labels: ['NewZealand', 'Austerlia'],
      
    
        datasets: [
          {
            label : "Test per one Million",
            data: [NewZealand.deaths,Austerlia.deaths],
                backgroundColor:[
                  'red',
                  'blue',
                  'yellow'
                ]
            },
            
          ],
           
        }
     Populationdata = {
            labels: ['NewZealand', 'Austerlia'],
          
        
            datasets: [
              
                {
                    label : "Test per one Million",
                    data: [NewZealand.population,Austerlia.population],
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
        }  
    return (
    <div className="App" style={{width:'30%', height:'30%'}}>
      <h1>Covid19 testing in Contries</h1>
      {piediv}
      
    </div>
  );
}
