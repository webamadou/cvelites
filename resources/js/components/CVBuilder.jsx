import React, { Component } from "react";
import NavBar from "./NavBar";
import Saly from "./models/Saly";

class CVBuilder extends Component {
    render() {
        return (
            <div>
                <NavBar logOut={this.props.logOut} />
                <Saly user={this.props.user.user} />
                <div id="blur" />
                <div id="bg" />
            </div>
        );
    }
}

export default CVBuilder;
