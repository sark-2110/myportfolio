import React, { Component } from 'react';
import config from 'react-reveal/globals';
import Fade from 'react-reveal/Fade';
 
config({ ssrFadeout: true });

export default class WorkExperience extends Component {
    render() {
        return (
            <div id="internship" className="mx-auto p-3 border-top text-left">
                <div className="section-education mx-auto p-2">
                    <p className="resume-education p-3 border-bottom">WORK EXPERIENCE</p>
                    <Fade bottom>
                        <span>
                            <b>COGNIZANT TECHNOLOGY SOLUTION</b>
                            <span className="float-right lead">
                                <i>26 June 2021-05 August 2024</i>
                            </span>
                            <br />
                            <h5>Salesforce Developer</h5>
                            <ul style={{listStyleType:"circle"}}>
                                <li>Spearheaded the transformation of the organization’s architecture from Classic to Lightning, 
                                    utilizing LWC and Aura; the initiative enhanced user experience and reduced page load times and 
                                    search time by 20%, leading to increased user satisfaction.</li>
                                <li>Analysed data patterns with the Support team, uncovering the recurring issues contributing to 
                                    high ticket volume; implemented tailored troubleshooting guides, resulting in a 30% decrease 
                                    in repetitive inquiries and enhanced team productivity.</li>
                                <li>Reduced the ticket count up to 35% by suggesting and providing automation ideas which led to 
                                    less ticket creation.</li>
                                <li>Salesforce Customization, Configuration , Apex, LWC, Aura.</li>
                                <p>Tech/Language Stack:</p> 
                                <span className="border border-secondary text-info pr-2 pl-2 mr-1 d-inline-block skill">Salesforce Customization</span>
                                <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">Apex</span>
                                <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">LWC</span>
                                <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">CSS</span>
                            </ul>
                        </span>
                    </Fade>
                </div>
            </div>
        )
    }
}
