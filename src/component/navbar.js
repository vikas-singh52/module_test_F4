import React from "react";
import bellIcon from "../icons/Group (1).svg"
import saveIcon from "../icons/Group (2).svg"
import userIcon from "../icons/Group (3).svg"
import homeIcon from "../icons/Group 2918.png"
import '../styles/navbar.css'
import { NavLink } from "react-router-dom";



const Navbar = () => {

    return(
        <div className="navbar">
            <div className="navbar-items">
            <nav>
                <h2>TravelMedia.in</h2>
                <div className="icons-group">
                    <NavLink to="/">
                      <img className="icon" src={homeIcon} alt="home_icon"/>
                    </NavLink>
                    <NavLink to="item">
                    <img className="icon" src={bellIcon} alt="home_icon"/>
                    </NavLink>
                    <NavLink to="/">
                      <img className="icon" src={userIcon} alt="home_icon"/>
                    </NavLink>
                    <NavLink to="/item">
                      <img className="icon" src={saveIcon} alt="home_icon"/>
                    </NavLink>
                </div>
            </nav>
            </div>
        </div>
    )
}

export default Navbar