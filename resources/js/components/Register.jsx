import React from "react";
import { Link } from "react-router-dom";
import { userService } from "./_services";
import Loader from "./Loader";

class Register extends React.Component {
    constructor(props) {
        super(props);

        userService.logout();
        this.state = {
            first_name: "",
            name: "",
            email: "",
            password: "",
            password_confirm: "",
            displayLoader: "none",
            disabled: false,
            error: ""
        };
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleRegister = e => {
        e.preventDefault();
        const {
            first_name,
            name,
            email,
            password,
            password_confirm
        } = this.state;

        // stop here if form is invalid
        if (!(first_name && name && email && password)) {
            return;
        }
        this.setState({
            displayLoader: "flex",
            disabled: false
        });

        //this.setState({ loading: true });
        userService
            .register(first_name, name, email, password, password_confirm)
            .then(data => {
                if (data.success) {
                    const { from } = this.props.location.state || {
                        from: { pathname: `/app/notification` }
                    };
                    this.props.history.push(from);
                } else {
                    let feedbacks = [];
                    this.setState({
                        error: data.message,
                        disabled: false,
                        displayLoader: "none"
                    });
                }
            });
    };

    render() {
        const {
            first_name,
            name,
            email,
            password,
            password_confirm,
            displayLoader,
            disabled,
            error
        } = this.state;
        const errors = Object.keys(error).map(key => (
            <div className="alert alert-warning" key={key}>
                {error[key]}
            </div>
        ));
        return (
            <div>
                <div id="wrapper" className="formWrapper">
                    <Loader displayLoader={displayLoader} />
                    <div className="logo">
                        <Link to="/app">
                            <span className="icon fa-gem" />
                        </Link>
                    </div>
                    <h2 className="major">Register</h2>
                    <div id="feedbacks">{errors}</div>
                    <form
                        method="post"
                        action=""
                        onSubmit={this.handleRegister}
                    >
                        <div className="fields">
                            <div className="field">
                                <label htmlFor="first_name">First Name</label>
                                <input
                                    value={first_name}
                                    autoComplete="off"
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    className="center-block"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="name">Name</label>
                                <input
                                    value={name}
                                    autoComplete="off"
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="center-block"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input
                                    value={email}
                                    autoComplete="off"
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="center-block"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="password">Password</label>
                                <input
                                    value={password}
                                    autoComplete="off"
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="center-block"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="password_confirm">
                                    Password Confirm
                                </label>
                                <input
                                    value={password_confirm}
                                    autoComplete="off"
                                    id="password_confirm"
                                    name="password_confirm"
                                    type="password"
                                    className="center-block"
                                    onChange={this.handleChange}
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
                                    disabled={disabled}
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
                            <span className="label">
                                I already have an account
                            </span>
                        </Link>
                    </p>
                </div>
                <div id="blur" />
                <div id="bg" />
            </div>
        );
    }
}

export default Register;
