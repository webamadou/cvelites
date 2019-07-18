import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeUserLogged extends Component {
    state = {};
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-light topbar static-top shadow">
                    <div><Link to='/app' className="logo">CVElites</Link></div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown no-arrow d-sm-none">
                            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-search fa-fw"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bell fa-fw"></i>
                                <span className="badge badge-danger badge-counter">3+</span>
                            </a>
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                                <h6 className="dropdown-header">
                                    Alerts Center
                                </h6>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-primary">
                                            <i className="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 12, 2019</div>
                                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-success">
                                            <i className="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-warning">
                                            <i className="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-envelope fa-fw"></i>
                                <span className="badge badge-danger badge-counter">7</span>
                            </a>
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                                <h6 className="dropdown-header">
                                    Message Center
                                </h6>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt=""/>
                                        <div className="status-indicator bg-success"></div>
                                    </div>
                                    <div className="font-weight-bold">
                                        <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                                        <div className="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt=""/>
                                        <div className="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                                        <div className="small text-gray-500">Jae Chun · 1d</div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt=""/>
                                        <div className="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                                        <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt=""/>
                                        <div className="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                                        <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                    </div>
                                </a>
                                <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                            </div>
                        </li>
                        <div className="topbar-divider d-none d-sm-block"></div>
                        
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">UserName<span className="caret"></span></span>
                                <i className="fa fa-user"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item" onClick={this.props.logOut}><i className="fa fa-power"></i> Logout</button>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="container-fluid builder-container pt-4">
                    <div className="container resume-wrapper mod-saly tm-dark fp-roboto">
                        <div className="header-wrapper row mt-4">
                            <div className="col-2 avatar">
                                <img src={require("../assets/images/default-avatar.png")} />
                            </div>
                            <div className="col-6 name-profession">
                                <h1>Papa Amadou Abdoulaye BA</h1>
                                <h5>Developpeur Administrateur WEB</h5>
                            </div>
                            <div className="col-4 contacts">
                                <ul className="user-details">
                                    <li>221 77 234 98 93<i className="fa fa-phone-alt"></i></li>
                                    <li>paab26@live.fr <i className="fa fa-envelope"></i></li>
                                    <li>Oukam - Cite Assemblee - Dakar Senegal <i className="fa fa-home"></i></li>
                                </ul>
                            </div>
                            <div className="col-12 presentation">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quaerat natus dolorem, sint aspernatur ut laudantium vel et! Nam amet beatae quod quae quos soluta ipsam eum deserunt! Fugiat, repellat. Sit amet consectetur adipisicing elit. Est quaerat natus dolorem, sint aspernatur ut laudantium.
                            </div>
                        </div>
                        <div className="content-wrapper">
                            <div className="row">
                                <div className="col-8 l-column">
                                    <div className="cv-bloc experiences-wrapper">
                                        <div className="bloc-title">Experience</div>
                                        <div className="bloc-content experiences-blocs">
                                            <div className="experience" id="experience_1">
                                                <h3>Developpeur Junior</h3>
                                                <h4>Afrimedias News Agency</h4>
                                                <ul className="date-place">
                                                    <li>04/2016 - 07/2017</li>
                                                    <li>Dakar</li>
                                                </ul>
                                                <div className="company-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum repudiandae fugiat assumenda explicabo dicta quo qui, optio aut quaerat impedit quisquam officia molestias provident quas doloremque recusandae nam laudantium</div>
                                                <div className="experience-tasks">
                                                    <ul>
                                                        <li>Amet consectetur adipisicing elit. Laudantium similique quae impedit.</li>
                                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laud.</li>
                                                        <li>Loret consectetur adipisicing elit. Laudantium similique quae impedit.</li>
                                                        <li>Lorem ipsum dolor etur adipisicing elit. Laudantium similique quae impedit.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="experience" id="experience_1">
                                                <h3>Developpeur Junior</h3>
                                                <h4>Afrimedias News Agency</h4>
                                                <ul className="date-place">
                                                    <li>04/2016 - 07/2017</li>
                                                    <li>Dakar</li>
                                                </ul>
                                                <div className="company-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum repudiandae fugiat assumenda explicabo dicta quo qui, optio aut quaerat impedit quisquam officia molestias provident quas doloremque recusandae nam laudantium</div>
                                                <div className="experience-tasks">
                                                    <ul>
                                                        <li>Amet consectetur adipisicing elit. Laudantium similique quae impedit.</li>
                                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laud.</li>
                                                        <li>Loret consectetur adipisicing elit. Laudantium similique quae impedit.</li>
                                                        <li>Lorem ipsum dolor etur adipisicing elit. Laudantium similique quae impedit.</li>
                                                    </ul>
                                                </div>
                                            </div>                                           
                                        </div>
                                    </div>
                                    <div className="cv-bloc educations-wrapper">
                                        <div className="bloc-title">Education</div>
                                        <div className="bloc-content educations-blocs">
                                            <ul>
                                                <li>
                                                    <h3>Developpement Administration Web</h3>
                                                    <h4>Universite Alioune Diop de bambey</h4>
                                                    <div className="date-place">02/2006 - 10/2011</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 r-column">
                                    <div className="cv-bloc skills-wrapper">
                                        <div className="bloc-title">COMPETENCES</div>
                                        <div className="bloc-content skills-blocs">
                                            <ul>
                                                <li>php</li>
                                                <li>ruby</li>
                                                <li>html/css</li>
                                                <li>javascript</li>
                                                <li>laravel</li>
                                                <li>wordpress</li>
                                                <li>silex</li>
                                                <li>Ruby on Rails</li>
                                                <li>Photoshop</li>
                                                <li>Modelisation</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="cv-bloc realisations-wrapper">
                                        <div className="bloc-title">realisatons</div>
                                        <div className="bloc-content realisations-blocs">
                                            <ul>
                                                <li>https://mysite.com</li>
                                                <li>https://mysite.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="cv-bloc languages-wrapper">
                                        <div className="bloc-title">languages</div>
                                        <div className="bloc-content languages-blocs">
                                            <ul>
                                                <li>
                                                    <span className="lang">Francais</span>
                                                    <div className="lang-level">
                                                        <span className="level active"></span>
                                                        <span className="level active"></span>
                                                        <span className="level active"></span>
                                                        <span className="level active"></span>
                                                        <span className="level"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="lang">Anglais</span>
                                                    <div className="lang-level">
                                                        <span className="level active"></span>
                                                        <span className="level active"></span>
                                                        <span className="level active"></span>
                                                        <span className="level active"></span>
                                                        <span className="level"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="lang">Wolof</span>
                                                    <div className="lang-level">
                                                        <span className="level active"></span>
                                                        <span className="level active"></span>
                                                        <span className="level active"></span>
                                                        <span className="level active"></span>
                                                        <span className="level"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="lang">Arabe</span>
                                                    <div className="lang-level">
                                                        <span className="level active"></span>
                                                        <span className="level"></span>
                                                        <span className="level"></span>
                                                        <span className="level"></span>
                                                        <span className="level"></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="cv-bloc interests-wrapper">
                                        <div className="bloc-title">INTERESTS</div>
                                        <div className="bloc-content interest-blocs">
                                            <ul>
                                                <li>NBA</li>
                                                <li>NFL</li>
                                                <li>Livre Audios</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="blur" />
                <div id="bg" />
            </div>
        );
    }
}

export default HomeUserLogged;
