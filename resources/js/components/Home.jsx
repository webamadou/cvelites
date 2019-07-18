import React, { Component } from "react";
import HomeUserNotLogged from "./pages/HomeUserNotLogged";
import HomeUserLogged from "./pages/HomeUserLogged";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        if (this.props.isLoggedIn === false) {
            return <HomeUserNotLogged isLoggedIn={this.props.isLoggedIn} />;
        } else {
            return (
                <HomeUserLogged
                    logOut={this.props.logOut}
                    isLoggedIn={this.props.isLoggedIn}
                    user={this.props.user}
                />
            );
        }
    }
}
