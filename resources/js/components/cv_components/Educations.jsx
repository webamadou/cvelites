import React, { Component } from "react";
import Moment from "react-moment";

class Educations extends Component {
    render() {
        const { educations } = this.props;
        return (
            <div className="bloc-content educations-blocs">
                <ul>
                    {educations.map(education => {
                        return (
                            <li key={education.id}>
                                <h3>{education.degree}</h3>
                                <h4>Universite Alioune Diop de bambey</h4>
                                <div className="date-place">
                                    <Moment format="YYYY">
                                        {education.graduation_year}
                                    </Moment>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Educations;
