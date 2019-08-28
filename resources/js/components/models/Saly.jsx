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
import Languages from "../cv_components/Languages";

class Saly extends Component {
    render() {
        const { user, resumes } = this.props;
        const {
            experiences,
            educations,
            skills,
            achievements,
            hobbies,
            languages
        } = resumes;
        return (
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
                                <div className="bloc-title">Educations</div>
                                <Educations educations={educations} />
                            </div>
                        </div>
                        <div className="col-4 r-column">
                            <div className="cv-bloc skills-wrapper">
                                <div className="bloc-title">COMPETENCES</div>
                                <Skills skills={skills} />
                            </div>
                            <div className="cv-bloc realisations-wrapper">
                                <div className="bloc-title">Réalisatons</div>
                                <Achievements achievements={achievements} />
                            </div>
                            <div className="cv-bloc languages-wrapper">
                                <div className="bloc-title">languages</div>
                                <div className="bloc-content languages-blocs">
                                    <Languages languages={languages} />
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
        );
    }
}

export default Saly;
