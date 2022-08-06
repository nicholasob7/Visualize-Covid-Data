import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {
    Home, Team, Instructors, Covid19, NewCovid19, ContinentsDoughnut,
    ContinentsPolar, GlobalHistorical, GlobalVaccineHistorical, APIBarChart, Pie
} from './pages';
import "./style/dark.scss"
import { useContext } from "react";
import DarkModeContext from "./context/darkModeContext";




function App() {

    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={darkMode ? "app dark" : "app"}>
            <BrowserRouter>
                <Routes>
                    {/* Landing */}
                    <Route path="/" element={(<Home />)} />
                    <Route path="/home" element={(<Home />)} />

                    {/* Pages */}
                    <Route path="/covid19" element={<Covid19 />} />
                    <Route path="/newCovid19" element={<NewCovid19 />} />

                    {/* Charts */}
                    <Route path="/continentsDoughnut" element={<ContinentsDoughnut />} />
                    <Route path="/continentsPolar" element={<ContinentsPolar />} />
                    <Route path="/globalHistorical" element={<GlobalHistorical />} />
                    <Route path="/globalVaccineHistorical" element={<GlobalVaccineHistorical />} />
                    <Route path="/apiBarChart" element={<APIBarChart />} />
                    <Route path="/pie" element={<Pie />} />

                    {/* Team */}
                    <Route path="/team" element={<Team />} />
                    <Route path="/instructors" element={<Instructors />} />


                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;