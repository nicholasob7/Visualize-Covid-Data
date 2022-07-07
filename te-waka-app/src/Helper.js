import React, { useEffect } from 'react';

React.useEffect = await fetchData();
const fetch = (`https://disease.sh/v3`);


    const continentsData = async () => {
        const response = await fetch(
            "https://disease.sh/v3/covid-19/continents"
        );
        const data = await response.json();
        continentsData(data);
    };
    fetchData(continentsData);


    const countriesData = async () => {
        const response = await fetch(
            "https://disease.sh/v3/covid-19/countries"
        );
        const data = await response.json();
        countriesData(data);
    };
    fetchData(countriesData);

    const vaccineCountriesData = async () => {
        const response = await fetch(
            "https://disease.sh/v3/covid-19/vaccine/countries"
        );
        const data = await response.json();
        vaccineData(data);
    };
    fetchData(vaccineCountriesData);

    const historicalData = async () => {
        const response = await fetch(
            "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        const data = await response.json();
        historicalData(data);
    };
    fetchData(historicalData);

    const coverageData = async () => {
        const response = await fetch(
            "https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=all&fullData=true"
        );
        const data = await response.json();
        coverageData(data);
    };
    fetchData(coverageData);

    export default fetchData;

    export const fetchData = async () => {
        const response = await fetch(
            "https://disease.sh/v3/covid-19/all"
        );
        const data = await response.json();
        return data;
    }