import { Link } from "react-router-dom";
import "../styles/NavBar.css"; // Link your CSS file

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/interactive-simulation">Interactive Simulation</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;