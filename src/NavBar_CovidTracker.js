import { useState, useEffect } from "react";

const NavBarCovidTracker = () => {
    const [vaccinesTracker, setVaccinesTracker] = useState(" loading...");
    const [vaccinesDifference, setvaccinesDifference] = useState("0");
    var formatter = new Intl.NumberFormat();

    useEffect(() => {
        requestVaccines();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestVaccines() {
        const res = await fetch(
            // This is bad :(
            "https://blue-dew-0b3a.nickcoombe1.workers.dev/?https://api.covid19tracker.ca/summary"
        );
        const json = await res.json();
        setVaccinesTracker(
            ` ${formatter.format(json.data[0].total_vaccinated)}`
        );
        setvaccinesDifference(
            `${formatter.format(json.data[0].change_vaccinated)}`
        );
    }

    return (
        <nav className="nav-covid-tracker">
            Vaccines Administered{" "}
            <span aria-label="canada" role="img">
                🇨🇦
            </span>{" "}
            -
            <a href="https://covid19tracker.ca/vaccinationtracker.html">
                {vaccinesTracker}
            </a>
            (<img src={require("/assets/trending_up.png")} alt="up arrow"></img>
            <div>{vaccinesDifference}</div>)
        </nav>
    );
};

export default NavBarCovidTracker;
