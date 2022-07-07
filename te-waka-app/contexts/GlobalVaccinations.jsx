import { useEffect, useState } from 'react'

const GlobalVaccinations = () => {
    const [GlobalVaccinations, setGlobalVaccinations] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=all&fullData=true"
            );
            const data = await response.json();
            setGlobalVaccinations(data);
        };
        fetchData();
    }
        , []);

    return (<GlobalVaccinations />)
}

export default GlobalVaccinations