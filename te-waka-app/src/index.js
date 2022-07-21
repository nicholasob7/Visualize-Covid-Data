import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BarChart from "./archive/ApiBarChart";
import "bootstrap/dist/css/bootstrap.min.css"
// import DougnutChart from "./archive/ApiDougnut";


// import SimpleExample from "./archive/SimpleExample";
// import ApiExample from "./archive/ApiExample";
import ApiLineExample from "./archive/ApiLineExample";
// import PlotExample from "./archive/PlotExample";

// import reportWebVitals from "./archive/useless/reportWebVitals";

// import PieChartScreen from "./archive/ApiBarChart2";
// import DoughnutChart from "./archive/ApiBarChart2";
// import BarTwo from "./archive/ApiHorizontal";
// import Map from "./archive/NewMap";
import Covid19 from './components/Covid19'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
   
    {/* <SimpleExample />
    <ApiExample /> */}
    <ApiLineExample />
    {/* <PlotExample />  */}
    <BarChart />
    {/* <DoughnutChart/> */}
    <Covid19 />
   

    {/* <PieChartScreen/> */}

  </>
);


