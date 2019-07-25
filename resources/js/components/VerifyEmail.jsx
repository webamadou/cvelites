import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { async } from "q";

class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            displayLoader: "flex"
        };
    }

    componentDidMount() {
        const { pathname, search } = this.props.location;
        //const data = userService.verifyUser(pathname, search);
        axios
            .get(`http://localhost:8000/api${pathname}${search}`, async)
            .then(response => {
                return response;
            })
            .then(json => {
                if (json.data.success) {
                    this.setState({
                        message: json.data.message,
                        displayLoader: "none"
                    });
                }
                //return json.data;
            })
            .catch(error => {
                //alert(`An Error Occured! ${error}`);
                console.log(`${error}`);
            });
    }
    render() {
        return (
            <div>
                <div id="wrapper" className="formWrapper">
                    <Loader displayLoader={this.state.displayLoader} />
                    <section id="header">
                        <div className="logo">
                            <Link to="/">
                                <span className="icon fa-gem" />
                            </Link>
                        </div>
                        <div className="content">
                            <h1 className="inner">{this.state.message}</h1>
                            <hr />
                            <h3>
                                Click on the link below to acces your account
                            </h3>
                            <Link to="/app/login">
                                <button type="button" className="primary">
                                    Authenticate
                                </button>
                            </Link>
                        </div>
                    </section>
                </div>
                <div id="blur" />
                <div id="bg" />
            </div>
        );
    }
}

export default VerifyEmail;
