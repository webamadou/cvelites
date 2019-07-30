import React, { Component } from "react";
import Moment from "react-moment";

class Experiences extends Component {
    render() {
        const experiences =
            this.props.experiences != undefined ? this.props.experiences : [];
        return (
            <div className="cv-bloc experiences-wrapper">
                <div className="bloc-title">Experience</div>
                <div className="bloc-content experiences-blocs">
                    {experiences.map(experience => {
                        let ended_at =
                            experience.still_there !== 1 ? (
                                <Moment format="MM/YYYY">
                                    {experience.ended_at}
                                </Moment>
                            ) : (
                                "Still there"
                            );
                        return (
                            <div
                                className="experience"
                                id={experience}
                                key={experience.id}
                            >
                                <h3>{experience.title}</h3>
                                <h4>Afrimedias News Agency</h4>
                                <ul className="date-place">
                                    <li>
                                        <Moment format="MM/YYYY">
                                            {experience.started_at}
                                        </Moment>
                                        - {ended_at}
                                    </li>
                                    {/* <li>Dakar</li> */}
                                </ul>
                                <div className="company-description">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Repellat ipsum repudiandae
                                    fugiat assumenda explicabo dicta quo qui,
                                    optio aut quaerat impedit quisquam officia
                                    molestias provident quas doloremque
                                    recusandae nam laudantium
                                </div>
                                <div className="experience-tasks">
                                    <ul>
                                        <li>
                                            Amet consectetur adipisicing elit.
                                            Laudantium similique quae impedit.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Laud.
                                        </li>
                                        <li>
                                            Loret consectetur adipisicing elit.
                                            Laudantium similique quae impedit.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor etur adipisicing
                                            elit. Laudantium similique quae
                                            impedit.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Experiences;
