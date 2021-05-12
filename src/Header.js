import { Link } from "react-router-dom";

import NavCovidTracker from "./NavCovidTracker";

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
            <NavCovidTracker></NavCovidTracker>
            <nav className="nav-links">
                <Link to="/app">App</Link>
                <Link to="/about">Help</Link>
                <Link to="/meet-team">Meet the Team</Link>
            </nav>
        </nav>
    );
};

export default Header;
