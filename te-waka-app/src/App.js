import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, Team, Instructors } from './components';
import {
    Dashboard, ColorPicker, GlobalHistorical, GlobalVaccineHistorical,
    ContinentsDoughnut, ContinentsPolar, APIBarChart
} from './pages';

import "./App.css";

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
    const { activeMenu } = useStateContext();

    return (
        <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
                    <TooltipComponent content="Settings" position="Top">
                        <button type="button"
                            className="text-3xl p-3
                        hover:drop-shadow-xl
                        hover:bg-light-gray text-white"
                            style={{
                                background: 'blue',
                                borderRadius: '50%'
                            }}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar
                    dark:bg-secondary-dark-bg
                    bg-white">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0
                    dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div className={
                    `dark:bg-main-bg bg-main-bg
                    min-h-screen w-full ${activeMenu ?
                        'md:ml-72' : 'flex-2'}`
                }>
                    <div className="fixed md:static
                    bg-main-bg dark:bg-main-dark-bg
                    navbar w-full">
                        <Navbar />
                    </div>
                </div>
                <div>
                    <Routes>
                        {/* Dashboard */}
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />

                        {/* Pages */}
                        <Route path="/team" element={<Team />} />
                        <Route path="/instructors" element={<Instructors />} />

                        {/* Apps */}
                        <Route path="/color-picker" element={<ColorPicker />} />

                        {/* Charts */}
                        {/* <Route path="/Covid19" element={<Covid19 />} /> */}
                        {/* <Route path="/NewCovid19" element={<NewCovid19 />} /> */}
                        <Route path="/globalhistorical" element={<GlobalHistorical />} />
                        <Route path="/globalvaccinehistorical" element={<GlobalVaccineHistorical />} />
                        <Route path="/continentsdoughnut" element={<ContinentsDoughnut />} />
                        <Route path="/continentspolar" element={<ContinentsPolar />} />
                        <Route path="/apibarchart" element={<APIBarChart />} />
                        {/* <Route path="/pie" element={<Pie />} /> */}

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;