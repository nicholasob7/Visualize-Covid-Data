import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/world-cases",
            name: "World Cases",
            icon: <FaUserAlt />
        },
        {
            path: "/world-deaths",
            name: "World Deaths",
            icon: <FaRegChartBar />
        },
        {
            path: "/global-historical",
            name: "Global Historical",
            icon: <FaCommentAlt />
        },
        {
            path: "/global-vaccine-historical",
            name: "Global Vaccine Historical",
            icon: <FaShoppingBag />
        },
        {
            path: "/continents-doughnut",
            name: "Continents Doughnut",
            icon: <FaThList />
        },
        {
            path: "/continents-polar",
            name: "Continents Polar",
            icon: <FaThList />
        },
        {
            path: "/api-bar-chart",
            name: "API Bar Chart",
            icon: <FaThList />
        },
        {
            path: "/pie",
            name: "Pie Chart",
            icon: <FaThList />
        }
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;