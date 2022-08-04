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

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <DashboardCustomizeTwoToneIcon />
                <span className="logo">Te Waka App</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <TravelExploreSharpIcon />
                        <span>WorldMapCases</span>
                    </li>
                    <li>
                        <SelfImprovementSharpIcon />
                        <span>WorldMapDeaths</span>
                    </li>
                    <li>
                        <LandscapeTwoToneIcon />
                        <span>ContinentsCases</span>
                    </li>
                    <li>
                        <GroupTwoToneIcon />
                        <span>ContinentsDeaths</span>
                    </li>
                    <li>
                        <NumbersTwoToneIcon />
                        <span>WorldNumbers</span>
                    </li>
                    <li>
                        <VaccinesTwoToneIcon />
                        <span>WorldVaccines</span>
                    </li>
                    <li>
                        <PercentTwoToneIcon />
                        <span>ANZ</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">color options</div>
        </div>
    )
}

export default Sidebar;