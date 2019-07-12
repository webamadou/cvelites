import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component{
    render(){
        return (
            <div>
                <div id="wrapper">
                    <section id="header">
                        <div className="logo">
                            <span className="icon fa-gem"></span>
                        </div>
                        <div className="content">
                            <div className="inner">
                                <h1>CVElites</h1>
                                <p>A fully responsive site template designed by HTML5 UP and
                                    released<br/>for free under the Creative Commons license.</p>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="#intro">Auth</a></li>
                                <li><a href="#work">Register</a></li>
                            </ul>
                        </nav>
                    </section>
                </div>
                <div id="blur" />
                <div id="bg" />
            </div>
        );
    }
}
