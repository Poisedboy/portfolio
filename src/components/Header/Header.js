import React from "react";

const Header = () => {
    return (
        <div className="social-buttons">
            <a href="/">
                <span className="icon">
                    <ion-icon name="home-outline"></ion-icon>
                </span>
            </a>
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
                095 86 80 714
            </a>
        </div>
    )
};

export default Header;
