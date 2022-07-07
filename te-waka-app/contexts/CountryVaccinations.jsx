import { useEffect, useState } from 'react';

const CountryVaccinations = () => {
    const [CountryVaccinations, setCountryVaccinations] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://disease.sh/v3/covid-19/vaccine/countries"
            );
            const data = await response.json();
            setCountryVaccinations(data);
        };
        fetchData();
    }
        , []);
    return (<CountryVaccinations />)
}

export default CountryVaccinations