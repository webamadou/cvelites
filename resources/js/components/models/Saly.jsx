import React, { Component } from "react";

import Avatar from "../cv_components/Avatar";
import Contacts from "../cv_components/Contact";
import Experiences from "../cv_components/Experiences";
import Educations from "../cv_components/Educations";
import NameTitle from "../cv_components/NameTitle";
import Presentation from "../cv_components/Presentations";
import Skills from "../cv_components/Skills";
import Achievements from "../cv_components/Achievements";
import Hobbies from "../cv_components/Hobbies";

class Saly extends Component {
    render() {
        const { user } = this.props;
        const {
            hobbies,
            skills,
            experiences,
            country,
            achievements,
            educations,
            awards
        } = this.props.user.relations;

        return (
            <div className="container-fluid builder-container pt-4">
                <div className="container resume-wrapper mod-saly tm-dark fp-roboto">
                    <div className="header-wrapper row mt-4">
                        <Avatar user={user} />
                        <NameTitle
                            logOut={this.props.logOut}
                            name={user.name}
                            first_name={user.first_name}
                            title={user.title}
                        />
                        <Contacts
                            telephone={user.telephone}
                            email={user.email}
                            address={user.address}
                        />
                        <Presentation presentation={user.presentation} />
                    </div>
                    <div className="content-wrapper">
                        <div className="row">
                            <div className="col-8 l-column">
                                <Experiences experiences={experiences} />
                                <div className="cv-bloc educations-wrapper">
                                    <div className="bloc-title">Education</div>
                                    <Educations educations={educations} />
                                </div>
                            </div>
                            <div className="col-4 r-column">
                                <div className="cv-bloc skills-wrapper">
                                    <div className="bloc-title">
                                        COMPETENCES
                                    </div>
                                    <Skills skills={skills} />
                                </div>
                                <div className="cv-bloc realisations-wrapper">
                                    <div className="bloc-title">
                                        realisatons
                                    </div>
                                    <Achievements achievements={achievements} />
                                </div>
                                <div className="cv-bloc languages-wrapper">
                                    <div className="bloc-title">languages</div>
                                    <div className="bloc-content languages-blocs">
                                        <ul>
                                            <li>
                                                <span className="lang">
                                                    Francais
                                                </span>
                                                <div className="lang-level">
                                                    <span className="level active" />
                                                    <span className="level active" />
                                                    <span className="level active" />
                                                    <span className="level active" />
                                                    <span className="level" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="lang">
                                                    Anglais
                                                </span>
                                                <div className="lang-level">
                                                    <span className="level active" />
                                                    <span className="level active" />
                                                    <span className="level active" />
                                                    <span className="level active" />
                                                    <span className="level" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="lang">
                                                    Wolof
                                                </span>
                                                <div className="lang-level">
                                                    <span className="level active" />
                                                    <span className="level active" />
                                                    <span className="level active" />
                                                    <span className="level active" />
                                                    <span className="level" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="lang">
                                                    Arabe
                                                </span>
                                                <div className="lang-level">
                                                    <span className="level active" />
                                                    <span className="level" />
                                                    <span className="level" />
                                                    <span className="level" />
                                                    <span className="level" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="cv-bloc hobbies-wrapper">
                                    <div className="bloc-title">INTERESTS</div>
                                    <Hobbies hobbies={hobbies} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Saly;
