import { useEffect, useState } from 'react'

const Continents = () => {
    const [Continents, setContinents] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://disease.sh/v3/covid-19/continents"
            );
            const data = await response.json();
            setContinents(data);
        };
        fetchData();
    }
        , []);

    return (<Continents />)
}

export default Continents