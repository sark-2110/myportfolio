import React, { Component } from 'react';
import config from 'react-reveal/globals';
import Fade from 'react-reveal/Fade';
 
config({ ssrFadeout: true });

export default class Internship extends Component {
    render() {
        return (
            <div id="internship" className="mx-auto p-3 border-top text-left">
            <div className="section-education mx-auto p-2">
                <p className="resume-education p-3 border-bottom">INTERNSHIP</p>
                <Fade bottom>
                <span>
                    <b>INVIDE LABS (Ongoing)</b>
                    <span className="float-right lead">
                        <i>10 July 2020-10 January 2021</i>
                    </span>
                    <br />
                    <h5>Developer Intern</h5>
                    <ul style={{listStyleType:"circle"}}>
                        <li>Working on Project “Unified communication interface for remote teams”.</li>
                        <li>Working on various Development phases and activities.</li>
                    </ul>
                </span>
                </Fade>
                <Fade bottom>
                <span>
                    <b>INVIDE LABS</b>
                    <span className="float-right lead">
                        <i>9 June 2019-9 July 2020</i>
                    </span>
                    <br />
                    <h5>SDE Intern</h5>
                    <ul style={{listStyleType:"circle"}}>
                        <li>Designing and Developing main website for online developer conference for the organization.</li>
                        <li>Working on various Development phases and activities.</li>
                    </ul>
                </span>
                </Fade>
                <Fade bottom>
                <span>
                    <b>SAHU TECHNOLOGIES</b>
                    <span className="float-right lead">
                        <i>2 DEC 2019-2 JAN 2020</i>
                    </span>
                    <br />
                    <h5>Web Development Intern</h5>
                    <ul style={{listStyleType:"circle"}}>
                        <li>Designed and Developed the Front-End Solution for the organization.</li>
                        <li>HTML, CSS, JavaScript are the technologies used.</li>
                    </ul>
                </span>
                </Fade>
            </div>
            <div className="mx-auto p-3 border-top text-left">
                <div className="section-education mx-auto p-2">
                    <p className="resume-education p-3 border-bottom">PROJECTS</p>
                    <Fade bottom>
                        <div className="p-2 border-bottom">
                            <p>
                                <b>UNIFIED COMMUNICATION INTERFACE FOR REMOTE TEAMS</b>
                                <br />
                            </p>
                            <p>This Project will integrates all the messaging/social media messenger into One app that will 
                                try to improve the productivity will aim of reducing wastage of time in communication.
                                <br/>Tech Stack used:
                            </p>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">HTML</span>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">CSS</span>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">JavaScript</span>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">Bootstrap</span>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">ElectronJS</span>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">NodeJS</span>
                            <br />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="p-2 border-bottom">
                            <p>
                                <b>COVID-19 TRACKER</b>
                                <br />
                            </p>
                            <p>Provides the daily updates on COVID19 status like number of confirmed cases, recovered people and deaths 
                                along with global and country wise status. With data updated daily from John Hopkins University 
                                CSSE built using ReactJS
                                <br/>Tech Stack used:
                            </p>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">ReactJS</span>
                            <div className="p-2">
                                <a href="https://github.com/sark-2110/COVID19-TRACKER" target="_blank" rel="noopener noreferrer">
                                    View on Github
                                </a>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="p-2 border-bottom">
                            <p>
                                <b>EXPENSE TRACKER</b>
                                <br />
                            </p>
                            <p>Keeps Track of daily expense and also keeps tracks of all activity including expense and income so it 
                                easier to track of money spent as well as received in much simplified way through an app.
                                <br/>Tech Stack used:
                            </p>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">ReactJS</span>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">NodeJS</span>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">ExpressJS</span>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">MongoDB</span>
                            <div className="p-2">
                                <a href="https://github.com/sark-2110/ExpenseTracker-MERN" target="_blank" rel="noopener noreferrer">
                                    View on Github
                                </a>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="p-2 border-bottom">
                            <p>
                                <b>HOT AND COLD GAME</b>
                                <br />
                            </p>
                            <p>Modified Version of the Old Classic Game Guess the Number in a new Format which makes it much more easier 
                                to play and win. 
                                <br/>Tech Stack used:
                            </p>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">ReactJS</span>
                            <div className="p-2">
                                <a href="https://github.com/sark-2110/hot-cold-game" target="_blank" rel="noopener noreferrer">
                                    View on Github
                                </a>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="p-2">
                            <p>
                                <b>EXERCISE TRACKER</b>
                                <br />
                            </p>
                            <p>Keeps track of daily expense along with log of daily exercise
                                <br/>Tech Stack used:
                            </p>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">ReactJS</span>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">NodeJS</span>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">ExpressJS</span>
                            <span className="border border-secondary text-info p-2 mr-2 d-inline-block skill">MongoDB</span>
                            <div className="p-2">
                                <a href="https://github.com/sark-2110/Exercise-Tracker" target="_blank" rel="noopener noreferrer">
                                    View on Github
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
        )
    }
}
