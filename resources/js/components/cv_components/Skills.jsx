import React, { Component } from "react";

class Skills extends Component {
    render() {
        const skills = this.props.skills != undefined ? this.props.skills : [];
        return (
            <div className="bloc-content skills-blocs">
                <ul>
                    {skills.map(skill => {
                        return <li key={skill.id}>{skill.name}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default Skills;
