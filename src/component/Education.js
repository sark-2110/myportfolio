import React, { Component } from 'react';
import config from 'react-reveal/globals';
import Fade from 'react-reveal/Fade';
 
config({ ssrFadeout: true });

export default class Education extends Component {
    render() {
        return (
        <div id="resume" className="text-left">
            <h2  className="resume-heading p-5 text-center">RESUME</h2>
            <div className="section-education mx-auto p-2">
                <p className="resume-education p-3 border-bottom">EDUCATION</p>
                <Fade bottom>
                    <b>UNIVERSITY OF MUMBAI</b>
                    <span className="float-right lead">
                        <i>2017 - 2021</i>
                    </span>
                    <h5>B.E. Computer Engineering</h5>
                    <span>Coursework:</span>
                    <ul style={{listStyleType:"circle"}}>
                        <li>Data Structures and Algorithms</li>
                        <li>Database Management Systems</li>
                        <li>Operating Systems</li>
                        <li>Computer Network</li>
                        <li>Web Development</li>
                    </ul>
                    <p>Tech/Language Stack:</p> 
                    <span className="border border-secondary text-info pr-2 pl-2 mr-1 d-inline-block skill">C/C++</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">Python</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">HTML</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">CSS</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">JavaScript</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">NodeJS</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">ReactJS</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">DBMS</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">SQL</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">MongoDB</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">ExpressJS</span>
                </Fade>
            </div>
        </div>
        )
    }
}
