import React, { Component } from "react";
import NavBar from "./NavBar";
import Saly from "./models/Saly";
import axios from "axios";
import { async } from "q";

class CVBuilder extends Component {
    constructor(props) {
        super(props);
        const {
            match: { params }
        } = this.props;
        this.state = {
            user: JSON.parse(localStorage.getItem("user")),
            resumes: [],
            resumeCode: params.code
        };
    }

    componentDidMount() {
        axios
            .get(
                `http://localhost:8000/api/resume/${
                    this.state.resumeCode
                }?token=${this.state.user.auth_token}`,
                async
            )
            .then(response => {
                return response;
            })
            .then(json => {
                this.setState({
                    resumes: json.data.data
                });
            })
            .catch(error => {
                console.log("error => " + error);
            });
    }

    render() {
        const { user, resumes } = this.state;
        console.log(resumes);
        return (
            <div>
                <NavBar user={user} />
                <Saly user={user} resumes={resumes} />
                <div id="blur" />
                <div id="bg" />
            </div>
        );
    }
}

export default CVBuilder;
