import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Login extends Component {
    render() {
        return (
            <div>
                <div id="wrapper" className="formWrapper">
                    <h2 className="major">Authenticate</h2>
                    <form method="post" action="#">
                        <div className="fields">
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="field">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="text"
                                    name="password"
                                    id="password"
                                />
                            </div>
                        </div>
                        <ul className="actions login">
                            <li>
                                <button type="submit" className="primary">
                                    <span className="icon fa-user" /> Login
                                </button>
                            </li>
                            <li>
                                <button type="type" className="primary">
                                    <span className="icon brands fa-facebook" />
                                    Connect With Facebook
                                </button>
                            </li>
                            <li>
                                <button type="type" className="primary">
                                    <span className="icon brands fa-linkedin" />
                                    Connect With Linkedin
                                </button>
                            </li>
                        </ul>
                    </form>
                </div>
                <div id="blur" />
                <div id="bg" />
            </div>
        );
    }
}
