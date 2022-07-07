import React, { useState, useEffect, useRef } from "react"

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

export default function App() {
    return (
        <div className="App">
            <h1>Continents</h1>
            <ul>
                {Continents.map(Continent => (
                    <li key={Continent.name}>
                        <h2>{Continent.name}</h2>
                        <p>{Continent.cases}</p>
                    </li>
                ))}
            </ul>
        </div>