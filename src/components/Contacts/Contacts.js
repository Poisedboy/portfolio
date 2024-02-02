import { animated, useSpring } from "@react-spring/web";
import React from "react";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import phone from "../../assets/phone.png";
import "./contacts.css";

const Contacts = () => {
	const springs = useSpring({
		from: { x: 150 },
		to: { x: 0 },
	});

	return (
		<animated.div className="info" style={{ ...springs }}>
			<div className="text">
				<p>Feel free to text me</p>
			</div>
			<div className="icons">
				<a
					href="https://www.instagram.com/poisedboy/"
					target="_blank"
					rel="noreferrer">
					<img src={instagram} alt="instagram" />
				</a>
				<a
					href="https://www.linkedin.com/in/serhii-beschasnyi-9b6598164/"
					target="_blank"
					rel="noreferrer">
					<img src={linkedin} alt="linkedin" />
				</a>
				<a href="tel: 095 86 80 714">
					<img src={phone} alt="mobile phone" />
				</a>
			</div>
		</animated.div>
	);
};

export default Contacts;
