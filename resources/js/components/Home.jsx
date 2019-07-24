import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem("user"))
        };
    }
    render() {
        const { user } = this.state;
        return (
            <div>
                <NavBar />
                <div id="wrapper">
                    <section id="header">
                        <div className="logo">
                            <span className="icon fa-gem" />
                        </div>
                        <div className="content">
                            <div className="inner">
                                <h1>Your resumes</h1>
                            </div>
                        </div>
                    </section>
                    <div className="container mt-1">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-4">
                                <div className="card mb-4 bg-dark shadow-sm">
                                    <div className="card-body">
                                        <h3>Papa Amadou Abdoulaye BA</h3>
                                        <h5>Developpeur Web</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <Link to="/app/cvbuilder">
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-secondary btn-block"
                                                    >
                                                        <i className="fa fa-pencil" />
                                                        Edit
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="blur" />
                <div id="bg" />
            </div>
        );
    }
}

export default Home;
