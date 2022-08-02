import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/home/Home';
// import List from './pages/list/List';
import Team from './pages/team/Team';
import Instructors from './pages/instructors/Instructors';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="Team">
                            {/* <Route index element={<List />} /> */}
                            <Route path="Team/:id" element={<Team />} />
                            {/* <Route
                                path="new"
                                element={<New inputs={userInputs} title="Add New Team" />}
                            /> */}
                        </Route>
                        <Route path="Instructors">
                            {/* <Route index element={<List />} /> */}
                            <Route path="Instructors/:id" element={<Instructors />} />
                            {/* <Route
                                path="new"
                                element={<New inputs={userInputs} title="Add New Instructors" />}
                            /> */}
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;