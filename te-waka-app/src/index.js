import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BarChart from "./archive/ApiBarChart";
import "bootstrap/dist/css/bootstrap.min.css"
// import DougnutChart from "./archive/ApiDougnut";


// import SimpleExample from "./archive/SimpleExample";
// import ApiExample from "./archive/ApiExample";


import GlobalHistorical from "./Viz1/GlobalHistorical";
import GlobalVaccineHistorical from "./Viz2/GlobalVaccineHistorical";
import ContinentsDoughnut from "./Viz3/ContinentsDoughnut";
import ContinentsPolar from "./Viz4/ContinentsPolar";
import APIBarChart from "./Viz5/APIBarChart";
import PieChart from "./Viz6/PieChart";
import PieChartTwo from "./Viz6/PieChartTwo";
import RadarChart from "./Viz6/RadarChart";
// import GlobalLineChart from "./Viz1/GlobalLineChart";
// import Countries from "./Viz5/Countries";


// import ApiLineExample from "./archive/ApiLineExample";
// import PlotExample from "./archive/PlotExample";
// import reportWebVitals from "./archive/useless/reportWebVitals";
// import PieChartScreen from "./archive/ApiBarChart2";
// import DoughnutChart from "./archive/ApiBarChart2";
// import BarTwo from "./archive/ApiHorizontal";
// import Map from "./archive/NewMap";
import Covid19 from './components/Covid19'


const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <>

    {/* <SimpleExample />
    <ApiExample /> */}

    <GlobalHistorical />
    <GlobalVaccineHistorical />
    <ContinentsDoughnut />
    <ContinentsPolar />
    <APIBarChart />
    <PieChart />
    <PieChartTwo />
    <RadarChart />
  

    {/* <GlobalLineChart /> */}
    {/* <Countries /> */}
    {/* <ApiLineExample /> */}
    {/* <PlotExample />  */}
    {/* <DoughnutChart/> */}
    <Covid19 />
    {/* <PieChartScreen/> */}


  </>
);


