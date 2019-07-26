import React, { Component } from "react";
import NavBar from "./NavBar";
import Saly from "./models/Saly";

class CVBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem("user"))
        };
    }
    render() {
        const { user } = this.state;
        console.log(user);
        return (
            <div>
                <NavBar user={user} />
                <Saly user={user} />
                <div id="blur" />
                <div id="bg" />
            </div>
        );
    }
}

export default CVBuilder;
