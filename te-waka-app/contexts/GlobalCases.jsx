import { useEffect, useState } from 'react'

const GlobalCases = () => {
    const [GlobalCases, setGlobalCases] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
            );
            const data = await response.json();
            setGlobalCases(data);
        };
        fetchData();
    }
        , []);

    return (<GlobalCases />)
}

export default GlobalCases