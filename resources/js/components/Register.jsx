import React from "react";
import { Link } from "react-router-dom";
import { userService } from "./_services";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            name: "",
            email: "",
            password: "",
            buttonText: "<span className='icon fa-user' /> Login",
            disabled: false,
            error: null
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
        const { first_name, name, email, password } = this.state;

        // stop here if form is invalid
        if (!(first_name && name && email && password)) {
            return;
        }
        this.setState({
            buttonText:
                "<i class='fa fa-spinner fa-spin fa-1x fa-fw'></i><span class='sr-only'>Loading...</span>",
            disabled: false
        });

        //this.setState({ loading: true });
        userService.register(first_name, name, email, password).then(data => {
            if (data.success) {
                const { from } = this.props.location.state || {
                    from: { pathname: "/" }
                };
                this.props.history.push(from);
            } else {
                this.setState({
                    error: data.data,
                    disabled: false,
                    buttonText: ""
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
            buttonText,
            disabled,
            error
        } = this.state;
        return (
            <div>
                <div id="wrapper" className="formWrapper">
                    <div className="logo">
                        <Link to="/app">
                            <span className="icon fa-gem" />
                        </Link>
                    </div>
                    <h2 className="major">Register</h2>
                    <div id="feedbacks">{error}</div>
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
                                    password={password}
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
