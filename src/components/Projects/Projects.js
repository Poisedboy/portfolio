import React from "react";
import './projects.css';
import { useSpring, animated } from "@react-spring/web";

const projects = [
    { id: 0, name: 'ATS267', link: '', website: 'https://poisedboy.github.io/ats267/' },
    { id: 1, name: 'Wallet', link: 'https://github.com/Poisedboy/wallet', website: '' },
    { id: 6, name: 'Opera Passage', link: '', website: 'https://poisedboy.github.io/opera-ui/' },
    { id: 2, name: 'Exchange rate', link: 'https://github.com/Poisedboy/exchange-rate', website: 'https://poisedboy.github.io/exchange-rate/' },
    { id: 3, name: 'Abstract', link: 'https://github.com/Poisedboy/abstract', website: 'https://poisedboy.github.io/abstract/' },
    { id: 4, name: 'Calculator', link: 'https://github.com/Poisedboy/calculator', website: 'https://poisedboy.github.io/calculator/' },
    { id: 5, name: 'Star Wars', link: '', website: 'https://poisedboy.github.io/star-wars/' },
]

const Projects = () => {
    const springs = useSpring({
        from: { x: 500 },
        to: { x: 0 }
    });

    const listedProjects = projects.map(pro => {
        return (
            <animated.div key={pro.id} style={{...springs}}>
                <a href={pro.website}>{pro.name}</a> 
            </animated.div>
        );
    });

    return (
        <div className="container">
            <div className="content">
                <h3>Projects (frontend & design)</h3>
                {listedProjects}
            </div>
        </div>
    );
};

export default Projects;