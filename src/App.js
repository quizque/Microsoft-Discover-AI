import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
    const theme = useState("green");
    return (
        <div>
            <Router>
                <header>
                    <Link to="/">
                        <h1>AI Therapist</h1>
                    </Link>
                </header>
                <Switch>
                    <Route path="/details/:id"></Route>
                    <Route path="/"></Route>
                </Switch>
            </Router>
        </div>
    );
};

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
