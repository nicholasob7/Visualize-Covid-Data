import "./sidebar.scss";

import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import TravelExploreSharpIcon from '@mui/icons-material/TravelExploreSharp';
import SelfImprovementSharpIcon from '@mui/icons-material/SelfImprovementSharp';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import LandscapeTwoToneIcon from '@mui/icons-material/LandscapeTwoTone';
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import VaccinesTwoToneIcon from '@mui/icons-material/VaccinesTwoTone';
import NumbersTwoToneIcon from '@mui/icons-material/NumbersTwoTone';
import PercentTwoToneIcon from '@mui/icons-material/PercentTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import CastForEducationTwoToneIcon from '@mui/icons-material/CastForEducationTwoTone';

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" >
                    <DashboardCustomizeTwoToneIcon className="icon" />
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Te Waka App</span>
                </Link>

            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">o tatau Iwi</p>
                    <Link to="/covid19" style={{ textDecoration: "none" }}>
                        <li>
                            <TravelExploreSharpIcon className="icon" />
                            <span>WorldMapCases</span>
                        </li>
                    </Link>

                    <Link to="/newCovid19" style={{ textDecoration: "none" }}>
                        <li>
                            <SelfImprovementSharpIcon className="icon" />
                            <span>WorldMapDeaths</span>
                        </li>
                    </Link >

                    <p className="title">o tatau tautohetohe</p>
                    <Link to="/continentsDoughnut" style={{ textDecoration: "none" }}>
                        <li>
                            <LandscapeTwoToneIcon className="icon" />
                            <span>ContinentsDeaths</span>
                        </li>
                    </Link>

                    <Link to="/continentsPolar" style={{ textDecoration: "none" }}>
                        <li>
                            <GroupTwoToneIcon className="icon" />
                            <span>ContinentCases</span>
                        </li>
                    </Link>

                    <Link to="/apiBarChart" style={{ textDecoration: "none" }}>
                        <li>
                            <BarChartTwoToneIcon className="icon" />
                            <span>Tests and Populations</span>
                        </li>
                    </Link >

                    <p className="title">to tatau Ao</p>
                    <Link to="/globalHistorical" style={{ textDecoration: "none" }}>
                        <li>
                            <NumbersTwoToneIcon className="icon" />
                            <span>WorldNumbers</span>
                        </li>
                    </Link>

                    <Link to="/globalVaccineHistorical" style={{ textDecoration: "none" }}>
                        <li>
                            <VaccinesTwoToneIcon className="icon" />
                            <span>WorldVaccines</span>
                        </li>
                    </Link>

                    <p className="title">Nga orau o Ahitereiria me Aotearoa o te iwi whanui</p>
                    <Link to="/pie" style={{ textDecoration: "none" }}>
                        <li>
                            <PercentTwoToneIcon className="icon" />
                            <span>ANZ</span>
                        </li>
                    </Link>

                    <p className="title">Kaimahi</p>
                    <Link to="/team" style={{ textDecoration: "none" }}>
                        <li>
                            <GroupsTwoToneIcon className="icon" />
                            <span>Team</span>
                        </li>
                    </Link>

                    <p className="title">Nga Kaiako</p>
                    <Link to="/instructors" style={{ textDecoration: "none" }}>
                        <li>
                            <CastForEducationTwoToneIcon className="icon" />
                            <span>Instructors</span>
                        </li>
                    </Link>

                </ul>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div >
    );
};

export default Sidebar;