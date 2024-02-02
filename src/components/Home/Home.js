import { animated, useSpring } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import { getDescription } from "../../api/getDescription";
import "./home.css";

const Home = () => {
	const springs = useSpring({
		from: { x: 150 },
		to: { x: 0 },
	});

	const [text, setText] = useState("");

	useEffect(() => {
		const getTitle = async () => {
			const data = await getDescription();
			setText(data[2].text);
		};
		getTitle();
	}, []);

	return (
		<animated.div className="main" style={{ ...springs }}>
			<p>{text}</p>
		</animated.div>
	);
};

export default Home;
