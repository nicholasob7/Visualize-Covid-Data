import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import SimpleExample from "./archive/SimpleExample";
// import ApiExample from "./archive/ApiExample";
import ApiLineExample from "./archive/ApiLineExample";

import reportWebVitals from "./archive/useless/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <SimpleExample />
    <ApiExample /> */}
    <ApiLineExample />
  </>
);

reportWebVitals();
