import "./navbar.scss"
import SavedSearchOutlinedIcon from '@mui/icons-material/SavedSearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SavedSearchOutlinedIcon className="icon" />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon
                            className="icon"
                            onClick={() => dispatch({ type: "TOGGLE" })}
                        />
                        {/* Dark Mode */}
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon" />
                        {/* Fullscreen */}
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                        {/* List */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;