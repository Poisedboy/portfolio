import React from "react";
import './home.css';
import { useSpring, animated } from '@react-spring/web';

// const listWebPage = [
//     { id: 1, link: 'https://poisedboy.github.io/sidebar/', gitHubLink: 'https://github.com/Poisedboy/sidebar/' },
//     { id: 2, link: 'https://poisedboy.github.io/abstract/', gitHubLink: 'https://github.com/Poisedboy/abstract/' },
//     { id: 3, link: 'https://poisedboy.github.io/star-wars/', gitHubLink: 'https://github.com/Poisedboy/star-wars/' },
//     { id: 4, link: 'https://poisedboy.github.io/calculator/', gitHubLink: 'https://github.com/Poisedboy/calculator/' },
//     { id: 4, link: 'https://poisedboy.github.io/exchange-rate/', gitHubLink: 'https://github.com/Poisedboy/exchange-rate/' }
// ];

const Home = () => {
    const springs = useSpring({
        from: { x: 150 },
        to: { x: 0 }
    });

    return (
        <animated.div className="main" style={{...springs}}>
            <p>
                I am constantly engaged in the web development. <strong>ATS267</strong> and
                <strong>Opera passage</strong> are launched websites which were made to order.
                I like <strong>outdoor activities</strong>, walking tours in Carpathian mountains,
                travel to new places around Lviv or playing the basketball. 
            </p>
        </animated.div>
    )
};

export default Home;
