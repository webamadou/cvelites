import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

class HomeUserLogged extends Component {
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
                <NavBar user={user} />
                <div id="wrapper">
                    <section id="header">
                        <div className="logo">
                            <span className="icon fa-gem" />
                        </div>
                        <div className="content">
                            <div className="inner">
                                <h1>List of resumes</h1>
                            </div>
                        </div>
                    </section>
                    <div className="container mt-1">
                        <div className="row d-flex justify-content-center align-items-center">
                            {user.relations.resumes.map(resume => {
                                return (
                                    <div className="col-md-4" key={resume.id}>
                                        <div className="card mb-4 bg-dark shadow-sm">
                                            <div className="card-body">
                                                <h3>
                                                    {user.first_name}{" "}
                                                    {user.name}
                                                </h3>
                                                <h5>{resume.name}</h5>
                                                <p>
                                                    {user.presentation
                                                        .split(" ")
                                                        .slice(0, 39)
                                                        .join(" ")}
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <Link
                                                            to={`/app/cvbuilder/${
                                                                resume.code
                                                            }`}
                                                        >
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
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div id="blur" />
                <div id="bg" />
            </div>
        );
    }
}

export default HomeUserLogged;
