import React from "react";
import ProfilePage from "../ProfilePage/ProfilePage";

const listWebPage = [
    { id: 1, name: 'side bar', link: 'https://poisedboy.github.io/sidebar/', gitHubLink: 'https://github.com/Poisedboy/sidebar' },
    { id: 2, name: 'Abstract', link: 'https://poisedboy.github.io/abstract/', gitHubLink: 'https://github.com/Poisedboy/abstract' },
    { id: 3, name: 'Star Wars', link: 'https://poisedboy.github.io/star-wars/', gitHubLink: 'https://github.com/Poisedboy/star-wars' },
    { id: 4, name: 'Calculator', link: 'https://poisedboy.github.io/calculator/', gitHubLink: 'https://github.com/Poisedboy/calculator' }
];

const Main = () => {
    const renderList = listWebPage.map(item => {
        return (
            <li className="card">
                <a href={item.link}
                    className="link"
                    target='_blank'
                    rel="noreferrer"
                >
                    <img src='/' alt="webPage" />
                </a>
                <h3>{item.name}</h3>
                <p>Repo - <a href={item.gitHubLink}
                    target='_blank'
                    rel="noreferrer"
                    className="repo"
                >
                    {item.gitHubLink}
                </a>
                </p>
            </li>
        )
    });
    return (
        <div>
            <ProfilePage />
            <ul className="list">
                {renderList}
            </ul>
        </div>
    )
};

export default Main;
