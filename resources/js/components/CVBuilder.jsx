import React, { Component } from "react";
import NavBar from "./NavBar";
//import Saly from "./models/Saly";
import axios from "axios";
import Loadable from "react-loadable";
import Loader from "./Loader";
import { async } from "q";

import { PDFExport } from "@progress/kendo-react-pdf";

class CVBuilder extends Component {
    constructor(props) {
        super(props);
        const {
            match: { params }
        } = this.props;
        this.state = {
            user: JSON.parse(localStorage.getItem("user")),
            resumes: [],
            downloadPDFRef: null,
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
                `http://localhost:8000/api/resume/${this.state.resumeCode}?token=${this.state.user.auth_token}`,
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

    exportPDF = () => {
        this.state.downloadPDFRef.save();
    };

    render() {
        const { user, resumes } = this.state;
        console.log(resumes);
        const Model = this.state.model;
        return (
            <div>
                <NavBar user={user} exportPDF={this.exportPDF} />
                <div className="container-fluid builder-container pt-4">
                    <PDFExport
                        paperSize={"Letter"}
                        fileName="_____.pdf"
                        title=""
                        subject=""
                        keywords=""
                        ref={r => (this.state.downloadPDFRef = r)}
                    >
                        <Model user={user} resumes={resumes} />
                    </PDFExport>
                </div>
                <div id="blur" />
                <div id="bg" />
            </div>
        );
    }
}

export default CVBuilder;
