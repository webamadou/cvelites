import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        if (this.props.isLoggedIn === false) {
            return (
                <div>
                    <div id="wrapper">
                        <section id="header">
                            <div className="logo">
                                <span className="icon fa-gem" />
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <h1>CVElites</h1>
                                    <p>
                                        Create your cv on line and download it
                                    </p>
                                </div>
                            </div>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/app/login">Auth</Link>
                                    </li>
                                    <li>
                                        <Link to="/app/register">Register</Link>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                    </div>
                    <div id="blur" />
                    <div id="bg" />
                </div>
            );
        } else {
            return (
                <div>
                    <div id="wrapper">
                        <section id="header">
                            <div className="logo">
                                <span className="icon fa-gem" />
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <h1>Welcome</h1>
                                </div>
                            </div>
                            <nav>
                                <ul>
                                    <button onClick={this.props.logOut}>
                                        Log OUT
                                    </button>
                                </ul>
                            </nav>
                        </section>
                    </div>
                    <div id="blur" />
                    <div id="bg" />
                </div>
            );
        }
    }
}
