import { Link } from "react-router-dom";

import NavBarCovidTracker from "./NavBar_CovidTracker";

const Header = () => {
    return (
        <nav className="container">
            <Link to="/">
                <nav className="nav-logo">
                    <img
                        src="https://w7.pngwing.com/pngs/609/846/png-transparent-discord-logo-discord-computer-icons-logo-computer-software-avatar-miscellaneous-blue-angle-thumbnail.png"
                        alt="logo"
                    ></img>
                    <h3>AI Therapist</h3>
                </nav>
            </Link>
            <NavBarCovidTracker />
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/app">App</Link>
                <Link to="/about">Help</Link>
                <Link to="/meet-team">Meet the Team</Link>
            </nav>
        </nav>
    );
};

export default Header;
