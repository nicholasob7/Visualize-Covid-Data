import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BarChart from "./archive/ApiBarChart";
import PieChart from "./archive/pie";
import RadarChart from "./archive/radar";

// import SimpleExample from "./archive/SimpleExample";
// import ApiExample from "./archive/ApiExample";
import ApiLineExample from "./archive/ApiLineExample";
import PlotExample from "./archive/PlotExample";

import reportWebVitals from "./archive/useless/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <SimpleExample />
    <ApiExample /> */}
    {/* <ApiLineExample />
    <PlotExample /> */}
    {/* <BarChart /> */}
     <PieChart />  
      {/* <RadarChart />   */}

  </>
);

reportWebVitals();
