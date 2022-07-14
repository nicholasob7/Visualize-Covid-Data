import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

// import SimpleExample from "./archive/SimpleExample";
// import ApiExample from "./archive/ApiExample";
import GlobalHistorical from "./Viz1/GlobalHistorical";
import GlobalVaccineHistorical from "./Viz2/GlobalVaccineHistorical";
import ContinentsDoughnut from "./Viz3/ContinentsDoughnut";
// import NorthAmerica from "./Viz3/NorthAmerica";

import reportWebVitals from "./archive/useless/reportWebVitals";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <>
    {/* <SimpleExample />
    <ApiExample /> */}
    <GlobalHistorical />
    <GlobalVaccineHistorical />
    <ContinentsDoughnut />
    {/* <NorthAmerica /> */}

  </>
);

reportWebVitals();
