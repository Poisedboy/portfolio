import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';
import { useSpring, animated } from "@react-spring/web";

const NavBar = () => {
    const springs = useSpring({
        from: { y: -300 },
        to: { y: 0 },
        config: { duration: 300 }
    });

    return (
        <animated.div className="navbar" style={{...springs}}>
            <h2>Sehii Beschasnyi</h2>
            <h3>Frontend Developer</h3>
            <div className="links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
            </div>
        </animated.div>
    )
};

export default NavBar;