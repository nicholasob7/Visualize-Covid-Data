import React, { useEffect, useState } from 'react';
import api from "../api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Chart } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);const options= {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        generateLabels: function(chart) {
          // Get the default label list
          // console.log(chart.data.datasets);
          
          const original = ChartJS.overrides.pie.plugins.legend.labels.generateLabels;
          const labelsOriginal = original.call(this, chart);

          // Build an array of colors used in the datasets of the chart
          var datasetColors = chart.data.datasets.map(function(e) {
            return e.backgroundColor;
          });
          datasetColors = datasetColors.flat();

          // Modify the color and hide state of each label
          labelsOriginal.forEach(label => {
            // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
            label.datasetIndex = (label.index - label.index % 2) / 2;

            // The hidden state must match the dataset's hidden state
            label.hidden = !chart.isDatasetVisible(label.datasetIndex);

            // Change the color to match the dataset
            label.fillStyle = datasetColors[label.index];
          });

          return labelsOriginal;
        }
      },
      onClick: function(mouseEvent, legendItem, legend) {
        // toggle the visibility of the dataset from what it currently is
        legend.chart.getDatasetMeta(
          legendItem.datasetIndex
        ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
        legend.chart.update();
      }
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
          return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
        }
      }
    }
  }

};




export default function PieChart() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    api.getCountriesData().then((data) => setCountries(data))
  }, []);
  //    console.log(countries);  

   
  let Australia, NewZealand, Newzealanddata, Australiadata
  let piediv = <div>sameera</div>
  for (const contry of countries) {
    if (contry.country == "Australia") {
      Australia = contry

    }
    if (contry.country == "New Zealand") {
      NewZealand = contry

    }

  }

  console.log(Australia, NewZealand);
  const labels = countries.map((label) => label.countries);
  if (NewZealand) {


    Newzealanddata = {
      labels: ['AustraliaActive','NewzealandActive','AustraliaRecover','NewzealandREcover','AustraliaDeath', 'NewzealandDeath'],


      datasets: [
        {
          label: "Autralia",
          data: [Australia.active / Australia.population*100,NewZealand.active / NewZealand.population*100 ],  
          backgroundColor: [
            'green',
            'blue',
            'yellow'


      ],
      // borderWidth: 3,
      // radius : 400
    }, {
      labels: "NewZealan",
      data: [Australia.recovered / Australia.cases*100, NewZealand.recovered / NewZealand.cases*100],
      backgroundColor: [
        'red',
        'pink',
        'gray'
      ]
    },
    {
      labels: ['Australiadeath', 'Newzealanddeath'],
      data: [Australia.deaths / Australia.population*100, NewZealand.deaths / NewZealand.population*100],
      
      backgroundColor: [
        'green',
        'blue',
        'yellow'


      ],
      // borderWidth: 3,
      // radius : 400
    },
              ],

  }

  // Recovereddata = {
  //   labels: ['NewZealand', 'Austerlia'],


  //   datasets: [
  //     {
  //       label: "Test per one Million",
  //       data: [NewZealand.recovered, Australia.recovered],
  //       backgroundColor: [
  //         'red',
  //         'blue',
  //         'yellow',

  //       ]
  //     },

  //   ],


  // }
  // Activedata = {
  //   labels: ['NewZealand', 'Austerlia'],


  //   datasets: [
  //     {
  //       label: "Test per one Million",
  //       data: [NewZealand.active, Australia.active],
  //       backgroundColor: [
  //         'red',
  //         'blue',
  //         'yellow'
  //       ]
  //     },

  //   ],

  // }
  piediv = <div><Pie data={Newzealanddata} options={options} />
    {/* <Pie data={Australiadata} />
    <Pie data={Activedata} />
    <Pie data={Recovereddata} /> */}
  </div>
}

return (
  <div className="App" style={{ width: '50%', height: '50%' }}>
    <h1>Covid19 testing in Contries</h1>
    {piediv}

  </div>
);
}
