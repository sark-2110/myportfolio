import React from 'react'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          navBackground: ''
        };
    }
    componentDidMount() {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 70 ? "" : "rgba(255,255,255,0.95)";
            this.setState({ navBackground: backgroundcolor });
        });
    }
    render() {
        return (
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: `${this.state.navBackground}`}}>
                <div className="container">
                    <button className="navbar-toggler" id='toggle-menu-btn' type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                <path stroke="#E71D2B" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"
                                    d="M4 7h22M4 15h22M4 23h22"></path>
                            </svg>
                        </span>
                    </button>
                    <a className="navbar-brand page-scroll" href="#home"> SARVESH KHANDELWAL</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item pr-3">
                                <a className="nav-link" href="#home">About
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item pr-3">
                                <a className="nav-link" href="#resume">Resume</a>
                            </li>
                            <li className="nav-item pr-3">
                                <a className="nav-link" href="#internship">Internship/Projects</a>
                            </li>
                            <li className="nav-item pr-3">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
