import React, { Component } from "react";

class NameTitle extends Component {
    render() {
        const { first_name, name, title } = this.props;
        return (
            <div className="col-6 name-profession">
                <h1>{`${first_name} ${name}`}</h1>
                <h5>{title}</h5>
            </div>
        );
    }
}

export default NameTitle;
