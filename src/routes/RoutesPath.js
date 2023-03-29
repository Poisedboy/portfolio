import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Info from "../components/Info/Info";
import Projects from '../components/Projects/Projects';

export default function RoutePath() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='projects' element={<Projects />} />
            <Route path='info' element={<Info />} />
        </Routes>
    );
};
