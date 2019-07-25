import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userService } from "./_services";
import { async } from "q";

class Notifications extends Component {
    render() {
        return (
            <div>
                <div id="wrapper" className="formWrapper">
                    <section id="header">
                        <div className="logo">
                            <Link to="/">
                                <span className="icon fa-gem" />
                            </Link>
                        </div>
                        <div className="content">
                            <h1 className="inner">
                                We have saved your informations <br />
                                Now you need to confirm your email.
                            </h1>
                            <hr />
                            <h3>
                                We have sent to you an email with the link to
                                activate you account. Please connect to your
                                email address and click the link to activate
                                your account.
                                <br />
                                NB: You might not find the email in your
                                mailbox. I that case check your spam.
                            </h3>
                        </div>
                    </section>
                </div>
                <div id="blur" />
                <div id="bg" />
            </div>
        );
    }
}

export default Notifications;
