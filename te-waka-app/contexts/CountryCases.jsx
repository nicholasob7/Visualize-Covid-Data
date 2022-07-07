import { useEffect, useState } from 'react'

const CountryCases = () => {
  const [CountryCases, setCountryCases] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://disease.sh/v3/covid-19/countries"
      );
      const data = await response.json();
      setCountryCases(data);
    };
    fetchData();
  }
    , []);

  return (<CountryCases />)
}

export default CountryCases