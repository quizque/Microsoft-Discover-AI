import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Header from "./Header";

const App = () => {
    return (
        <div>
            <Router>
                <Header></Header>
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
