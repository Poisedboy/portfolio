import { Route, Routes } from "react-router-dom";
import Contacts from "../components/Contacts/Contacts";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";

export default function RoutePath() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="projects" element={<Projects />} />
			<Route path="contacts" element={<Contacts />} />
		</Routes>
	);
}
