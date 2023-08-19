import { NavLink } from "react-router-dom"
export default function Nav() {
    return(
        <nav id="main-nav" aria-label="Main navigation">
            <ul className="menu">
                <li>
                    <NavLink to="/">Home</NavLink></li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Project</NavLink>
                </li>
            </ul>
        </nav>
    );
}