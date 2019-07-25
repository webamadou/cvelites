import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { userService } from "./_services";

class Login extends Component {
    constructor(props) {
        super(props);

        userService.logout();

        this.state = {
            email: "",
            password: "",
            buttonText: "<span className='icon fa-user' /> Login",
            disabled: false,
            error: []
        };
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleLogin = e => {
        e.preventDefault();
        const { email, password } = this.state;

        // stop here if form is invalid
        if (!(email && password)) {
            return;
        }
        this.setState({
            buttonText:
                "<i class='fa fa-spinner fa-spin fa-1x fa-fw'></i><span class='sr-only'>Loading...</span>",
            disabled: true
        });

        //this.setState({ loading: true });
        userService.login(email, password).then(
            data => {
                if (data.success) {
                    const { from } = this.props.location.state || {
                        from: { pathname: "/" }
                    };
                    this.props.history.push(from);
                } else {
                    this.setState({
                        error: data.message,
                        disabled: false,
                        buttonText: ""
                    });
                }
            } /* ,
            error => {
                console.log(error);
                this.setState({
                    error: error.data,
                    disabled: false,
                    buttonText: <span className="icon fa-user" />
                });
            } */
        );
    };

    render() {
        const { email, password, buttonText, disabled, error } = this.state;
        const errors = Object.keys(error).map(key => (
            <div className="alert alert-warning" key={key}>
                {error[key]}
            </div>
        ));
        return (
            <div>
                <div id="wrapper" className="formWrapper">
                    <div className="logo">
                        <Link to="/app">
                            <span className="icon fa-gem" />
                        </Link>
                    </div>
                    <h2 className="major">Authenticate</h2>
                    <div id="feedbacks">{errors}</div>
                    <form method="post" action="#" onSubmit={this.handleLogin}>
                        <div className="fields">
                            <div className="field">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    value={email}
                                    autoComplete="off"
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="center-block"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="password">Your Password</label>
                                <input
                                    value={password}
                                    autoComplete="off"
                                    id="password-input"
                                    name="password"
                                    type="password"
                                    className="center-block"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <ul className="actions login">
                            <li>
                                <button
                                    type="submit"
                                    className="primary"
                                    id="submit-login"
                                    disabled={disabled}
                                >
                                    Authenticate
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
                            <span className="label">
                                I don't have an account
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

export default Login;
