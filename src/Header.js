import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const SearchParams = () => {
    const [vaccinesTracker, setVaccinesTracker] = useState(" loading...");
    const [vaccinesDifference, setvaccinesDifference] = useState("🠕 0");
    var formatter = new Intl.NumberFormat();

    useEffect(() => {
        requestVaccines();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestVaccines() {
        const res = await fetch(
            // This is bad :(
            "https://cors-anywhere.herokuapp.com/https://api.covid19tracker.ca/summary",
            {
                headers: {
                    "Content-type": "application/json",
                    orgin: "localhost:1234",
                },
            }
        );
        const json = await res.json();
        setVaccinesTracker(
            ` ${formatter.format(json.data[0].total_vaccinated)}`
        );
        setvaccinesDifference(
            `🠕 ${formatter.format(json.data[0].change_vaccinated)}`
        );
    }

    return (
        <div className="container">
            <Link to="/">
                <nav className="nav-logo">
                    <img src="https://w7.pngwing.com/pngs/609/846/png-transparent-discord-logo-discord-computer-icons-logo-computer-software-avatar-miscellaneous-blue-angle-thumbnail.png"></img>
                    <h3>AI Therapist</h3>
                </nav>
            </Link>
            <nav className="nav-covid-tracker">
                <h3>
                    Vaccines distributed in Ontario:
                    <div>
                        <a href="https://covid19tracker.ca/vaccinationtracker.html">
                            {vaccinesTracker}
                        </a>{" "}
                        (
                        <div className="nav-covid-tracker-difference">
                            {vaccinesDifference}
                        </div>
                        )
                    </div>
                </h3>
            </nav>
            <nav className="nav-links">
                <Link to="/app">App</Link>
                <Link to="/about">Help</Link>
                <Link to="/meet-team">Meet the Team</Link>
            </nav>
        </div>
    );
};

export default SearchParams;
