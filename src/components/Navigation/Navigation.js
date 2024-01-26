import { Outlet } from "react-router-dom";
import Mask from "../Mask/Mask";
import NavBar from "../NavBar/NavBar";

const Navigation = () => {
	return (
		<>
			<Mask />
			<NavBar />
			<Outlet />
		</>
	);
};

export default Navigation;
