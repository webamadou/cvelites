import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Login = ({ history, loginUser = f => f }) => {
    let _email, _password;
    const handleLogin = e => {
        e.preventDefault();
        loginUser(_email.value, _password.value);
    };
    return (
        <div>
            <div id="wrapper" className="formWrapper">
                <div className="logo">
                    <Link to="/app">
                        <span className="icon fa-gem" />
                    </Link>
                </div>
                <h2 className="major">Authenticate</h2>
                <div id="feedbacks" />
                <form method="post" action="#" onSubmit={handleLogin}>
                    <div className="fields">
                        <div className="field">
                            <label htmlFor="email">Your Email</label>
                            <input
                                ref={input => (_email = input)}
                                autoComplete="off"
                                id="email"
                                name="email"
                                type="text"
                                className="center-block"
                                placeholder="email"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Your Password</label>
                            <input
                                ref={input => (_password = input)}
                                autoComplete="off"
                                id="password-input"
                                name="password"
                                type="password"
                                className="center-block"
                                placeholder="password"
                            />
                        </div>
                    </div>
                    <ul className="actions login">
                        <li>
                            <button
                                type="submit"
                                className="primary"
                                id="email-login-btn"
                            >
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
                <p>
                    <Link to="/app/register">
                        <span className="label">I don't have an account</span>
                    </Link>
                </p>
            </div>
            <div id="blur" />
            <div id="bg" />
        </div>
    );
};

export default Login;
