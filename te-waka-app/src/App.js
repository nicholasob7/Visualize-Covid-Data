import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./index.css";
import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";

import { Sidebar, Covid19, NewCovid19 } from './components';
import { Dashboard, GlobalHistorical, GlobalVaccineHistorical, ContinentsDoughnut, ContinentsPolar, APIBarChart, Pie } from './pages';

const App = () => {
    return (
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/Covid19" element={<Covid19 />} />
                    <Route path="/NewCovid19" element={<NewCovid19 />} />
                    <Route path="/globalhistorical" element={<GlobalHistorical />} />
                    <Route path="/globalvaccinehistorical" element={<GlobalVaccineHistorical />} />
                    <Route path="/continentsdoughnut" element={<ContinentsDoughnut />} />
                    <Route path="/continentspolar" element={<ContinentsPolar />} />
                    <Route path="/apibarchart" element={<APIBarChart />} />
                    <Route path="/pie" element={<Pie />} />
                </Routes>
            </Sidebar>
        </BrowserRouter>
    );
};

export default App;