import React, { useState, useEffect } from "react";
import api from "../../api";

export default function ApiExample() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    api.getCountriesData().then((response) => {
      const data = response;
      console.log(
        `Expecting to see contries data here ${JSON.stringify(data)}`
      );
      setCountries(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Countries</h1>
      <ul>
        {countries.map((eachCountries) => (
          <li key={eachCountries.country}>
            <h2>{eachCountries.country}</h2>
            <p>{eachCountries.cases}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
