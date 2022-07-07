import React, { useState, useEffect } from "react";

// if this is an empty component, just make it part of the bigger component
// const Continents = () => {
//   const [continents, setContinents] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://disease.sh/v3/covid-19/continents");
//       const data = await response.json();
//       setContinents(data);
//     };
//     fetchData();
//   }, []);
// };

export default function SimpleExample() {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/continents");
      const data = await response.json();
      console.log(
        `Expecting to see continent data here ${JSON.stringify(data)}`
      );
      setContinents(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Continents</h1>
      <ul>
        {continents.map((eachContinent) => (
          <li key={eachContinent.continent}>
            <h2>{eachContinent.continent}</h2>
            <p>{eachContinent.cases}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
