import React from "react";
import './contacts.css';
import instagram from '../../assets/instagram.png';
import phone from '../../assets/phone.png';
import linkedin from '../../assets/linkedin.png';

const Contacts = () => {
    return (
        <div className="info">
            <div className="text">
                <p><strong>Feel free</strong> to text <strong>me</strong></p>   
            </div>
            <div className="icons">
                <a
                    href='https://www.instagram.com/poisedboy/'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={instagram}
                        alt='instagram'
                    />
                </a>
                <a
                    href='https://www.linkedin.com/in/serhii-beschasnyi-9b6598164/'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={linkedin}
                        alt='linkedin'
                    />
                </a>
                <a href='tel: 095 86 80 714'>
                    <img
                        src={phone}
                        alt='mobile phone'
                    />
                </a>
            </div>
        </div>
    );
};

export default Contacts;