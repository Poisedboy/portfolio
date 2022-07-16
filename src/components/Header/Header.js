import React from "react";

const Header = () => {

    const toggleButton = () => {
        let navigation = document.querySelector('.social-buttons');
        navigation.classList.toggle('active');
    };

    return (
        <header className="social-buttons">
            <span className="toggle" onClick={toggleButton}></span>
            {/* <a href="/">
                <span className="icon">
                    <ion-icon name="home-outline"></ion-icon>
                </span>
            </a> */}
            <a href="/">
                <span className="icon">
                    <ion-icon name="logo-instagram"></ion-icon>
                </span>
            </a>
            <a href="/">
                <span className="icon">
                    <ion-icon name="logo-facebook"></ion-icon>
                </span>
            </a>
            <a href="/">
                <span className="icon">
                    <ion-icon name="logo-github"></ion-icon>
                </span>
            </a>
            <a href="tel:095-868-0714">
                <span className="icon">
                    <ion-icon name="call-outline"></ion-icon>
                </span>
            </a>
        </header>
    )
};

export default Header;
