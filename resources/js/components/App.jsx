import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { PrivateRoute } from "./_helpers";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import CVBuilder from "./CVBuilder";
import VerifyEmail from "./VerifyEmail";
import Notifications from "./Notifications";
import axios from "axios";
import $ from "jquery";

import Tests from "./Test";

class App extends React.Component {
    render() {
        return (
            <Switch data="data">
                <PrivateRoute
                    exact
                    path="/app/cvbuilder/:code"
                    component={CVBuilder}
                />
                <Route exact path="/" component={Home} />
                <Route exact path="/app" component={Home} />
                <Route path="/app/login" component={Login} />
                <Route path="/app/register" component={Register} />
                <Route path="/app/verify/:id" component={VerifyEmail} />
                <Route path="/app/notification" component={Notifications} />
            </Switch>
        );
    }
}

//const AppContainer = withRouter(props => <App {...props} />);
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,

    document.getElementById("root")
);
