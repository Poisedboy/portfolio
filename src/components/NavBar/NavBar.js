import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <h2>Sehii Beschasnyi</h2>
            <h3>Frontend Developer</h3>
            <div className="links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/info'>Info</NavLink>
            </div>
        </div>
    )
};

export default NavBar;