import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Team from './pages/team/Team';
import Instructors from './pages/instructors/Instructors';
// import WorldCases from './pages/worldCases/WorldCases';
// import WorldDeaths from './pages/worldDeaths/WorldDeaths';
import { ContinentsDoughnut } from "./pages";
import { ContinentsPolar } from "./pages";
import { GlobalHistorical } from "./pages";
import { GlobalVaccineHistorical } from "./pages";
// import { BarChart } from "./pages/Barchart";
// import { Pie } from "./pages/ozKiwiPie";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* Landing */}
                    <Route path="/" element={(<Home />)} />
                    <Route path="/home" element={(<Home />)} />

                    {/* Team */}
                    <Route path="/team" element={<Team />} />
                    <Route path="/instructors" element={<Instructors />} />

                    {/* Pages */}
                    {/* <Route path="worldCases" element={<WorldCases />} />
                    <Route path="worldDeaths" element={<WorldDeaths />} /> */}

                    {/* Charts */}
                    <Route path="continentsDoughnut" element={<ContinentsDoughnut />} />
                    <Route path="continentsPolar" element={<ContinentsPolar />} />
                    <Route path="globalHistorical" element={<GlobalHistorical />} />
                    <Route path="globalVaccineHistorical" element={<GlobalVaccineHistorical />} />
                    {/* <Route path="BarChart" element={<BarChart />} /> */}
                    {/* <Route path="OzKiwiPie" element={<OzKiwiPie />} /> */}


                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;