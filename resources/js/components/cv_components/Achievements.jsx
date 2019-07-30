import React, { Component } from "react";

class Achievements extends Component {
    render() {
        const achievements =
            this.props.achievements != undefined ? this.props.achievements : [];
        return (
            <div className="bloc-content realisations-blocs">
                <ul>
                    {achievements.map(achievement => {
                        return (
                            <li key={achievement.id}>{achievement.title}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Achievements;
