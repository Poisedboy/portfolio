import { animated, useSpring } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getDescription } from "../../api/getDescription";
import "./navbar.css";

const NavBar = () => {
	const springs = useSpring({
		from: { y: -300 },
		to: { y: 0 },
		config: { duration: 300 },
	});
	const [description, setDescription] = useState({
		name: "",
		title: "",
	});

	useEffect(() => {
		const fetchDescription = async () => {
			const [{ title }, { name_owner }] = await getDescription();
			setDescription((prevState) => ({
				...prevState,
				name: name_owner,
				title,
			}));
		};
		fetchDescription();
	}, []);

	return (
		<animated.div className="navbar" style={{ ...springs }}>
			<h2>{description.name}</h2>
			<h3>{description.title}</h3>
			<div className="links">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/projects">Projects</NavLink>
				<NavLink to="/contacts">Contacts</NavLink>
			</div>
		</animated.div>
	);
};

export default NavBar;
