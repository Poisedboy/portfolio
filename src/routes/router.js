import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contacts from "../components/Contacts/Contacts";
import Projects from "../components/Projects/Projects";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
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
