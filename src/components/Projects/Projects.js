import React from "react";
import './projects.css';

const projects = [
    { id: 1, name: 'Wallet', link: 'https://github.com/Poisedboy/wallet', website: '' },
    { id: 2, name: 'Exchange rate', link: 'https://github.com/Poisedboy/exchange-rate', website: 'https://poisedboy.github.io/exchange-rate/' },
    { id: 3, name: 'Abstract', link: 'https://github.com/Poisedboy/abstract', website: 'https://poisedboy.github.io/abstract/' },
    { id: 4, name: 'Calculator', link: 'https://github.com/Poisedboy/calculator', website: 'https://poisedboy.github.io/calculator/' },
    { id: 5, name: 'Star Wars', link: '', website: 'https://poisedboy.github.io/star-wars/' },
    { id: 6, name: '', link: '', website: '' },
    { id: 7, name: '', link: '', website: '' }
]

const Projects = () => {

    const listedProjects = projects.map(pro => {
        return (
            <div key={pro.id}>
                <a href={pro.website}>{pro.name}</a> 
            </div>
        );
    });

    return (
        <div className="container">
            <div className="content">
                <h3>Projects (frontend)</h3>
                {listedProjects}
            </div>
        </div>
    );
};

export default Projects;