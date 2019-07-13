import React, { Component } from "react";

class Register extends Component {
    //state = {  }
    render() {
        return (
            <div>
                <div id="wrapper" className="formWrapper">
                    <h2 className="major">Register</h2>
                    <form method="post" action="#">
                        <div className="fields">
                            <div className="field">
                                <label htmlFor="first_name">First Name</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
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
                            <div className="field">
                                <label htmlFor="password_confirm">
                                    Password Confirm
                                </label>
                                <input
                                    type="text"
                                    name="password_confirm"
                                    id="password_confirm"
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

export default Register;
