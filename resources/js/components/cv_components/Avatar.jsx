import React, { Component } from "react";

class Avatar extends Component {
    render() {
        return (
            <div className="col-2 avatar">
                <img src={require("../assets/images/default-avatar.png")} />
            </div>
        );
    }
}

export default Avatar;
