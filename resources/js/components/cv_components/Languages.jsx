import React, { Component } from "react";

class Languages extends Component {
    render() {
        const languages =
            this.props.languages != undefined ? this.props.languages : [];
        return (
            <ul>
                {languages.map(language => {
                    let levels = [];
                    let active = "";
                    let levelLenght = parseInt(language.pivot.level) * 0.05;
                    console.log(levelLenght, language.pivot.level);
                    for (let i = 0; i < 5; i++) {
                        active = levelLenght > i ? "active" : "";
                        levels.push(
                            <span className={`level ${active}`} key={i} />
                        );
                    }
                    return (
                        <li key={language.id}>
                            <span className="lang">{language.name}</span>
                            <div className="lang-level">{levels}</div>
                        </li>
                    );
                })}
                {/* <li>
                    <span className="lang">Anglais</span>
                    <div className="lang-level">
                        <span className="level active" />
                        <span className="level active" />
                        <span className="level active" />
                        <span className="level active" />
                        <span className="level" />
                    </div>
                </li>
                <li>
                    <span className="lang">Wolof</span>
                    <div className="lang-level">
                        <span className="level active" />
                        <span className="level active" />
                        <span className="level active" />
                        <span className="level active" />
                        <span className="level" />
                    </div>
                </li>
                <li>
                    <span className="lang">Arabe</span>
                    <div className="lang-level">
                        <span className="level active" />
                        <span className="level" />
                        <span className="level" />
                        <span className="level" />
                        <span className="level" />
                    </div>
                </li> */}
            </ul>
        );
    }
}

export default Languages;
