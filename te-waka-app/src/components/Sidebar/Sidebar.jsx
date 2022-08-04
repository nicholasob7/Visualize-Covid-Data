// import React from "react";
import "./sidebar.scss";
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';

import TravelExploreSharpIcon from '@mui/icons-material/TravelExploreSharp';
import SelfImprovementSharpIcon from '@mui/icons-material/SelfImprovementSharp';
import LandscapeTwoToneIcon from '@mui/icons-material/LandscapeTwoTone';
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import VaccinesTwoToneIcon from '@mui/icons-material/VaccinesTwoTone';
import NumbersTwoToneIcon from '@mui/icons-material/NumbersTwoTone';
import PercentTwoToneIcon from '@mui/icons-material/PercentTwoTone';

import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import CastForEducationTwoToneIcon from '@mui/icons-material/CastForEducationTwoTone';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <DashboardCustomizeTwoToneIcon className="icon" />
                <span className="logo">Te Waka App</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">o tatau Iwi</p>

                    <li>
                        <TravelExploreSharpIcon className="icon" />
                        <span>WorldMapCases</span>
                    </li>
                    <li>
                        <SelfImprovementSharpIcon className="icon" />
                        <span>WorldMapDeaths</span>
                    </li>
                    <p className="title">o tatau tautohetohe</p>
                    <li>
                        <LandscapeTwoToneIcon className="icon" />
                        <span>ContinentsCases</span>
                    </li>
                    <li>
                        <GroupTwoToneIcon className="icon" />
                        <span>ContinentsDeaths</span>
                    </li>
                    <p className="title">to tatau Ao</p>
                    <li>
                        <NumbersTwoToneIcon className="icon" />
                        <span>WorldNumbers</span>
                    </li>
                    <li>
                        <VaccinesTwoToneIcon className="icon" />
                        <span>WorldVaccines</span>
                    </li>
                    <p className="title">Nga orau o Ahitereiria me Aotearoa o te iwi whanui</p>
                    <li>
                        <PercentTwoToneIcon className="icon" />
                        <span>ANZ</span>
                    </li>
                    <p className="title">Kaimahi</p>
                    <li>
                        <GroupsTwoToneIcon className="icon" />
                        <span>Team</span>
                    </li>
                    <p className="title">Nga Kaiako</p>
                    <li>
                        <CastForEducationTwoToneIcon className="icon" />
                        <span>Instructors</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>

            </div>
        </div>
    )
}

export default Sidebar;