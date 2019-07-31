import React, { Component } from "react";
import NavBar from "./NavBar";
//import Saly from "./models/Saly";
import axios from "axios";
import Loadable from "react-loadable";
import Loader from "./Loader";
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
            resumeCode: params.code,
            model: this.toggleModule("Saly")
        };
    }

    toggleModule = model => {
        return Loadable({
            loader: () => import(`./models/${model}`),
            loading: () => <Loader />
        });
    };

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
                let model = json.data.data.model.file_name;
                this.setState({
                    resumes: json.data.data,
                    model: this.toggleModule(model)
                });
            })
            .catch(error => {
                console.log("error => " + error);
            });
    }

    render() {
        const { user, resumes } = this.state;
        console.log(resumes);
        const Model = this.state.model;
        return (
            <div>
                <NavBar user={user} />
                <Model user={user} resumes={resumes} />
                <div id="blur" />
                <div id="bg" />
            </div>
        );
    }
}

export default CVBuilder;
