import { RouterProvider } from "react-router-dom";
import "./app.css";
import { router } from "./routes/router";

function App() {
	return <RouterProvider router={router} />;
}

export default App;
