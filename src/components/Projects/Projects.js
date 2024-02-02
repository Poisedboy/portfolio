import { animated, useSpring } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import { getProjects } from "../../api/getProjects";
import "./projects.css";

const Projects = () => {
	const springs = useSpring({
		from: { x: 500 },
		to: { x: 0 },
	});

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const fetchProjects = async () => {
			const data = await getProjects();
			setProjects(data);
			console.log(projects);
		};
		fetchProjects();
	}, []);

	useEffect(() => {
		console.log(projects); // Log when projects change
	}, [projects]);

	const listedProjects = projects.map((pro) => {
		return (
			<animated.div key={pro.id} style={{ ...springs }}>
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
