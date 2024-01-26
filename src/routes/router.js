import { createBrowserRouter } from "react-router-dom";
import Contacts from "../components/Contacts/Contacts";
import Home from "../components/Home/Home";
import Navigation from "../components/Navigation/Navigation";
import Projects from "../components/Projects/Projects";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigation />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/contacts",
				element: <Contacts />,
			},
			{
				path: "/projects",
				element: <Projects />,
			},
		],
	},
]);
