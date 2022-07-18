import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

// import SimpleExample from "./archive/SimpleExample";
// import ApiExample from "./archive/ApiExample";
import GlobalHistorical from "./Viz1/GlobalHistorical";
import GlobalVaccineHistorical from "./Viz2/GlobalVaccineHistorical";
import ContinentsDoughnut from "./Viz3/ContinentsDoughnut";
import ContinentsPolar from "./Viz4/ContinentsPolar";
import APIBarChart from "./Viz5/APIBarChart";
import PieChart from "./Viz6/PieChart";
// import GlobalLineChart from "./Viz1/GlobalLineChart";
// import Countries from "./Viz5/Countries";



import reportWebVitals from "./archive/useless/reportWebVitals";

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

    {/* <GlobalLineChart /> */}
    {/* <Countries /> */}

  </>
);

reportWebVitals();
