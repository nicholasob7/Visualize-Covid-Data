import "./navbar.scss"
import SavedSearchOutlinedIcon from '@mui/icons-material/SavedSearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
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
                        <DarkModeOutlinedIcon className="icon" />
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