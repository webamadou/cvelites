import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import axios from "axios";
import $ from "jquery";

class App extends React.Component {
    _loginUser = (email, password) => {
        $("#login-form button")
            .attr("disabled", "disabled")
            .html(
                '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>'
            );
        var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        axios
            .post("http://localhost:8000/api/user/login", formData)
            .then(response => {
                console.log(response);
                return response;
            })
            .then(json => {
                if (json.data.success) {
                    //alert("Login Successful!");

                    let userData = {
                        first_name: json.data.data.first_name,
                        name: json.data.data.name,
                        id: json.data.data.email,
                        email: json.data.data.email,
                        auth_token: json.data.data.auth_token,
                        timestamp: new Date().toString()
                    };
                    let appState = {
                        isLoggedIn: true,
                        user: userData
                    };
                    //Save app state with user date in local storage
                    localStorage["appState"] = JSON.stringify(appState);
                    this.setState({
                        isLoggedIn: appState.isLoggedIn,
                        user: appState.user
                    });
                } else {
                    $("#feedbacks").html(
                        `<span className="alert alert-danger">Login Failed: ${
                            json.data.data
                        }</span>`
                    );
                    //alert(`Login Failed ${json.data.data}`);
                }

                $("#login-form button")
                    .removeAttr("disabled")
                    .html("Login");
            })
            .catch(error => {
                //alert(`An Error Occured! ${error}`);

                $("#feedbacks").html(
                    `<span className="alert alert-danger">An Error Occured</span>`
                );
                $("#login-form buttton")
                    .removeAttr("disabled")
                    .html("Login");
            });
    };

    _registerUser = (first_name, name, email, password) => {
        $("#register-user-btn")
            .attr("disabled", "disabled")
            .html(
                '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>'
            );

        var formData = new FormData();
        formData.append("password", password);
        formData.append("email", email);
        formData.append("name", name);
        formData.append("first_name", first_name);

        axios
            .post("http://localhost:8000/api/user/register", formData)
            .then(response => {
                console.log(response);
                return response;
            })
            .then(json => {
                if (json.data.success) {
                    //alert(`Registration Successful!`);

                    let userData = {
                        first_name: json.data.data.first_name,
                        name: json.data.data.name,
                        id: json.data.data.id,
                        email: json.data.data.email,
                        auth_token: json.data.data.auth_token,
                        timestamp: new Date().toString()
                    };
                    let appState = {
                        isLoggedIn: true,
                        user: userData
                    };
                    // save app state with user date in local storage
                    localStorage["appState"] = JSON.stringify(appState);
                    this.setState({
                        isLoggedIn: appState.isLoggedIn,
                        user: appState.user
                    });
                } else {
                    //alert(`Registration Failed!`);
                    $("#feedbacks").html(
                        `<span className="alert alert-danger">Registration failed, Please try again latter</span>`
                    );
                    $("#register-user-btn")
                        .removeAttr("disabled")
                        .html("Register");
                }
            })
            .catch(error => {
                $("#feedbacks").html(
                    `<span className="alert alert-danger">An error occured, Please try again latter</span>`
                );
                //alert("An Error Occured!" + error);
                console.log(`${formData} ${error}`);
                $("#register-user-btn")
                    .removeAttr("disabled")
                    .html("Register");
            });
    };

    _logoutUser = () => {
        console.log("Here we go");
        let appState = {
            isLoggedIn: false,
            user: {}
        };
        // save app state with user date in local storage
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
    };

    componentDidMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            console.log(AppState);
            this.setState({
                isLoggedIn: AppState.isLoggedIn,
                user: AppState
            });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {}
        };
    }

    render() {
        if (
            !this.state.isLoggedIn &&
            this.props.location.pathname !== "/" &&
            this.props.location.pathname !== "/app" &&
            this.props.location.pathname !== "/app/login" &&
            this.props.location.pathname !== "/app/register"
        ) {
            this.props.history.push("/app/login");
        }
        if (
            this.state.isLoggedIn &&
            (this.props.location.pathname === "/app/login" ||
                this.props.location.pathname === "/app/register")
        ) {
            this.props.history.push("/");
        }
        return (
            <Switch data="data">
                <Route
                    exact
                    path="/"
                    render={props => (
                        <Home
                            {...props}
                            logOut={this._logoutUser}
                            isLoggedIn={this.state.isLoggedIn}
                            user={this.state.user}
                        />
                    )}
                />
                <Route
                    exact
                    path="/app"
                    render={props => (
                        <Home
                            {...props}
                            logOut={this._logoutUser}
                            isLoggedIn={this.state.isLoggedIn}
                            user={this.state.user}
                        />
                    )}
                />

                <Route
                    path="/app/login"
                    render={props => (
                        <Login {...props} loginUser={this._loginUser} />
                    )}
                />

                <Route
                    path="/app/register"
                    render={props => (
                        <Register
                            {...props}
                            registerUser={this._registerUser}
                        />
                    )}
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
