import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

import axios from "axios";
import $ from "jquery";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {}
        };
        /* this._loginUser = this._loginUser.bind(this);
        this._registerUser = this._registerUser.bind(this);
        this._logoutUser = this._logoutUser.bind(this); */
    }

    render() {
        return (
            <Switch data="data">
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route
                    exact
                    path="/app"
                    render={props => <Home {...props} />}
                />

                <Route
                    path="/app/login"
                    render={props => <Login {...props} />}
                />

                <Route
                    path="/app/register"
                    render={props => <Register {...props} />}
                />
            </Switch>
        );
    }
}

const AppContainer = withRouter(props => <App {...props} />);
// console.log(store.getState())
render(
    <BrowserRouter>
        <AppContainer />
    </BrowserRouter>,

    document.getElementById("root")
);
