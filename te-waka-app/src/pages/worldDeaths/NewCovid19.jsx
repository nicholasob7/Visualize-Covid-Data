import React, { useState, useEffect } from "react";
import Header from "./Header";
import Loading from "./Loading";
import Legend from "./Legend";
import LoadCountriesTask from "./LoadCountriesTask";
import legendItems from "./LegendItems";
import NewCovidMap from "./NewCovidMap";


const NewCovid19 = () => {
  const [countries, setCountries] = useState([]);
  const legentItemsInReverse = [...legendItems].reverse();


  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load(setCountries);
  };


  useEffect(load, []);
  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <NewCovidMap countries={countries} />
          <Legend legendItems={legentItemsInReverse} />
        </div>
      )}
    </div>
  );
};

export default NewCovid19;
