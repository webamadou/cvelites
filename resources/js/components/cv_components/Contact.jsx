import React, { Component } from "react";
import { Link } from "react-router-dom";
class Contacts extends Component {
    render() {
        const telephone = this.props.telephone ? (
            <li>
                {this.props.telephone} <i className="fa fa-phone-alt" />
            </li>
        ) : (
            ""
        );
        const email = this.props.email ? (
            <li>
                {this.props.email} <i className="fa fa-envelope" />
            </li>
        ) : (
            ""
        );
        const address = this.props.address ? (
            <li>
                {this.props.address} <i className="fa fa-home" />
            </li>
        ) : (
            ""
        );
        return (
            <div className="col-4 contacts">
                <ul className="user-details">
                    {telephone}
                    {email}
                    {address}
                </ul>
            </div>
        );
    }
}

export default Contacts;
