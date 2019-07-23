import React, { Component } from "react";

class Presentations extends Component {
    render() {
        if (this.props.presentation === null) {
            return "";
        } else {
            return (
                <div className="col-12 presentation">
                    {this.props.presentation}
                </div>
            );
        }
    }
}

export default Presentations;
