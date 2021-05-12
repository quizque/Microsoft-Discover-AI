import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import MeetTeam from "./MeetTeam";
import MainApp from "./MainApp";
import Help from "./Help";

const App = () => {
    return (
        <div>
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/meet-team">
                        <MeetTeam></MeetTeam>
                    </Route>
                    <Route path="/app">
                        <MainApp></MainApp>
                    </Route>
                    <Route path="/about">
                        <Help></Help>
                    </Route>
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
