import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./NavBar";
import MeetTheTeam from "./Page_MeetTheTeam";
import MainApp from "./Page_MainApp";
import Help from "./Page_Help";

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/meet-team">
                        <MeetTheTeam />
                    </Route>
                    <Route path="/app">
                        <MainApp />
                    </Route>
                    <Route path="/about">
                        <Help />
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
