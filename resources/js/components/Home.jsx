import React, { Component } from "react";
import LoggedUser from "./pages/HomeUserLogged";
import NotLoggedUser from "./pages/HomeUserNotLogged";

class Home extends Component {
    render() {
        if (localStorage.getItem("user")) {
            return <LoggedUser />;
        }
        return <NotLoggedUser />;
    }
}

export default Home;
