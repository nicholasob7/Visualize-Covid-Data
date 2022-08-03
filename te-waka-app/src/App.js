import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Team from './pages/team/Team';
import Instructors from './pages/instructors/Instructors';
import { Covid19 } from './pages';
import { NewCovid19 } from "./pages";
import { ContinentsDoughnut } from "./pages";
import { ContinentsPolar } from "./pages";
import { GlobalHistorical } from "./pages";
import { GlobalVaccineHistorical } from "./pages";
import { APIBarChart } from "./pages";
import { Pie } from "./pages";

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
                    <Route path="covid19" element={<Covid19 />} />
                    <Route path="newCovid19" element={<NewCovid19 />} />

                    {/* Charts */}
                    <Route path="continentsDoughnut" element={<ContinentsDoughnut />} />
                    <Route path="continentsPolar" element={<ContinentsPolar />} />
                    <Route path="globalHistorical" element={<GlobalHistorical />} />
                    <Route path="globalVaccineHistorical" element={<GlobalVaccineHistorical />} />
                    <Route path="apiBarChart" element={<APIBarChart />} />
                    <Route path="pie" element={<Pie />} />


                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;