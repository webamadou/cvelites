import React, { Component } from "react";

class Hobbies extends Component {
    render() {
        const { hobbies } = this.props;
        return (
            <div className="bloc-content interest-blocs">
                <ul>
                    {hobbies.map(hobby => {
                        return <li key={hobby.id}>{hobby.name}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default Hobbies;
