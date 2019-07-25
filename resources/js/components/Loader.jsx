import React, { Component } from "react";

class Loader extends Component {
    render() {
        return (
            <div id="loader" style={{ display: this.props.displayLoader }}>
                <div className="lds-css ng-scope">
                    <div
                        style={{ width: "100%", height: "100%" }}
                        className="lds-double-ring"
                    >
                        <div />
                        <div />
                        <div>
                            <div />
                        </div>
                        <div>
                            <div />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loader;
