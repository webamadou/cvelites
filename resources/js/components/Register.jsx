import React from "react";
import { Link } from "react-router-dom";

const Register = ({ history, registerUser = f => f }) => {
    let _first_name, _email, _password, _password_confirm, _name;

    const handleRegister = e => {
        e.preventDefault();
        let first_name = _first_name.value;
        let name = _name.value;
        let email = _email.value;
        let password = _password.value;
        let password_confirm = _password_confirm.value;

        if (
            first_name === "" ||
            name === "" ||
            email === "" ||
            password === ""
        ) {
            $("#feedbacks").html(
                `<span className="alert alert-danger">Some required fields are still empty</span>`
            );
            return false;
        }
        if (password !== password_confirm) {
            $("#feedbacks").html(
                `<span className="alert alert-danger">Enter the same password for your confirmation</span>`
            );
            return false;
        }
        registerUser(
            _first_name.value,
            _name.value,
            _email.value,
            _password.value
        );
    };
    return (
        <div>
            <div id="wrapper" className="formWrapper">
                <div className="logo">
                    <Link to="/app">
                        <span className="icon fa-gem" />
                    </Link>
                </div>
                <h2 className="major">Register</h2>
                <div id="feedbacks" />
                <form method="post" action="" onSubmit={handleRegister}>
                    <div className="fields">
                        <div className="field">
                            <label htmlFor="first_name">First Name</label>
                            <input
                                ref={input => (_first_name = input)}
                                autoComplete="off"
                                id="first_name"
                                name="first_name"
                                type="text"
                                className="center-block"
                                placeholder="Your First Name"
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input
                                ref={input => (_name = input)}
                                autoComplete="off"
                                id="name"
                                name="name"
                                type="text"
                                className="center-block"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                ref={input => (_email = input)}
                                autoComplete="off"
                                id="email"
                                name="email"
                                type="email"
                                className="center-block"
                                placeholder="Your Email Address"
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input
                                ref={input => (_password = input)}
                                autoComplete="off"
                                id="password"
                                name="password"
                                type="password"
                                className="center-block"
                                placeholder="Your Password"
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="password_confirm">
                                Password Confirm
                            </label>
                            <input
                                ref={input => (_password_confirm = input)}
                                autoComplete="off"
                                id="password_confirm"
                                name="password_confirm"
                                type="password"
                                className="center-block"
                                placeholder="Confirm Your Password"
                                required
                            />
                        </div>
                    </div>
                    <ul className="actions login">
                        <li>
                            <button
                                type="submit"
                                className="primary"
                                id="register-user-btn"
                            >
                                <span className="icon fa-user" /> Regtister
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
                    <Link to="/app/login">
                        <span className="label">I already have an account</span>
                    </Link>
                </p>
            </div>
            <div id="blur" />
            <div id="bg" />
        </div>
    );
};

export default Register;
