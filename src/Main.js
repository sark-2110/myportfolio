import React from 'react';
import myStyle from './myStyle.css';
import Resume from './Resume.pdf';
import config from 'react-reveal/globals';
import Fade from 'react-reveal/Fade';
 
config({ ssrFadeout: true });

class Main extends React.Component{
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
    render(){
    return(

    <div className="container-fluid" style={{position:"relative",margin:"0",padding:"0",textAlign:"center"}}>
        <div className="top-section">
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: `${this.state.navBackground}`}}>
                <div className="container">
                    <button class="navbar-toggler" id='toggle-menu-btn' type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                <path stroke="#E71D2B" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"
                                    d="M4 7h22M4 15h22M4 23h22"></path>
                            </svg>
                        </span>
                    </button>
                    <a class="navbar-brand page-scroll" href="#home"> SARVESH KHANDELWAL</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item pr-3">
                                <a className="nav-link" href="#home">About
                                    <span class="sr-only">(current)</span>
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
            <div class="side-nav">
                <div class="fl-fl float-lk">
                    <i class="fa fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/sarveshkhandelwal/" target="_blank" rel="noopener noreferrer">Connect!</a>
                </div>
                <div class="fl-fl float-fb">
                    <i class="fa fa-facebook"></i>
                    <a href="https://www.facebook.com/khandelwalsarvesh8" target="_blank"  rel="noopener noreferrer">Connect</a>
                </div>
                <div class="fl-fl float-tw">
                    <i class="fa fa-twitter"></i>
                    <a href="https://twitter.com/sark2110" target="_blank" rel="noopener noreferrer">Follow</a>
                </div>
                <div class="fl-fl float-mail">
                    <i class="fa fa-envelope-o"></i>
                    <a href="mailto:khandelwalsarvesh8@gmail.com?subject=Contact Email" rel="noopener noreferrer">Email Me</a>
                </div>
                <div class="fl-fl float-git">
                    <i class="fa fa-github"></i>
                    <a href="https://github.com/sark-2110" target="_blank" rel="noopener noreferrer">Checkout Github</a>
                </div>
            </div>
    
            <div id="home" className="position-relative">
                <div className="container p-4 inner-home tent-center position-absolute text-white">
                    <Fade right cascade>
                        <h1>I'm Sarvesh Khandelwal</h1>
                    </Fade>
                    <p className="p-3">
                        <small className="text-muted" >I'm a Computer Engineering Student interested in </small>
                        Software Development,<br />Web Development
                        <small className="text-muted"> and </small>
                        Machine Learning. 
                        <small className="text-muted">Let's start exploring and find more</small>
                        <br /> 
                        <a href="#bio" style={{color:"white"}}>about me.</a>
                    </p>
                </div>  
            </div>
            <a href="#bio" className="text-info" data-toggle="tooltip" title="Scroll to Top">
                <i className="fa fa-angle-down fa-2x"></i>
            </a>
        </div>
        <div id="bio" className="console d-flex justify-content-center">
            <div className="code text-left text-white">
                <p>>> getEducation()</p>
                <Fade big cascade>
                    <p className="answer">&nbsp; => Bachelor Of Engineering (B.E.)</p>
                </Fade>
                <p>>> getUniversity()</p>
                <Fade big cascade>
                    <p className="answer">&nbsp; => Mumbai University</p>
                </Fade>
                <p>>> getMajor()</p>
                <Fade big cascade>
                    <p className="answer">&nbsp; => Computer Engineering</p>
                </Fade>
                <p>>> expectedGraduation()</p>
                <Fade big cascade>
                    <p className="answer">&nbsp; => May 2021</p>
                </Fade>
                <p>>> getInterest()</p>
                <Fade big cascade>
                    <p className="answer">&nbsp; => ["Web Development", "Software Development" , "Machine Learning"]</p>
                </Fade>
                <p>>> getResume()</p>
                <Fade big cascade>
                    <p className="answer">&nbsp; => "<a target="_blank" rel="noopener noreferrer" href={Resume}>sarveshResume.pdf</a>"</p>
                </Fade>
                <p>>> getEmail()</p>
                <Fade big cascade>
                    <p className="answer">&nbsp; => "<a href="mailto:khandelwalsarvesh8@gmail.com?subject=Contact Email">
                        khandelwalsarvesh8@gmail.com</a>"
                    </p>
                </Fade>
            </div>
        </div>
        <div id="resume" className="text-left">
            <h2  className="resume-heading p-5 text-center">RESUME</h2>
            <div className="section-education mx-auto p-2">
            <Fade bottom>
                <p className="resume-education p-3 border-bottom">EDUCATION</p>
                <p className="college">
                    <b>UNIVERSITY OF MUMBAI</b>
                    <span className="float-right lead">
                        <i>2017 - 2021</i>
                    </span>
                    <br />
                    <h5>B.E. Computer Engineering</h5>
                </p>
                <p>Coursework:</p>
                <ul style={{listStyleType:"circle"}}>
                    <li>Data Structures and Algorithms</li>
                    <li>Database Management Systems</li>
                    <li>Operating Systems</li>
                    <li>Computer Network</li>
                    <li>Web Development</li>
                </ul>
                <span>Tech/Language Stack:</span>
                <br />
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
        <br />
        <div id="internship" className="mx-auto p-3 border-top text-left">
            <Fade bottom>
                <div className="section-education mx-auto p-2">
                    <p className="resume-education p-3 border-bottom">INTERNSHIP</p>
                    <p className="college">
                        <b>Invide Labs (Ongoing)</b>
                        <span className="float-right lead">
                            <i>10 July 2020-10 January 2021</i>
                        </span>
                        <br />
                        <h5>Developer Intern</h5>
                        <ul>
                            <li>Working on Project “Unified communication interface for remote teams”.</li>
                            <li>Working on various Development phases and activities.</li>
                        </ul>
                    </p>
                    <p className="college">
                        <b>Invide Labs</b>
                        <span className="float-right lead">
                            <i>9 June 2019-9 July 2020</i>
                        </span>
                        <br />
                        <h5>SDE Intern</h5>
                        <ul>
                            <li>Designing and Developing main website for online developer conference for the organization.</li>
                            <li>Working on various Development phases and activities.</li>
                        </ul>
                    </p>
                    <p className="college">
                        <b>SAHU TECHNOLOGIES</b>
                        <span className="float-right lead">
                            <i>2 DEC 2019-2 JAN 2020</i>
                        </span>
                        <br />
                        <h5>Web Development Intern</h5>
                        <ul>
                            <li>Designed and Developed the Front-End Solution for the organization.</li>
                            <li>HTML, CSS, JavaScript are the technologies used.</li>
                        </ul>
                    </p>
                </div>
            </Fade>
        </div>
        <div className="mx-auto p-3 border border-secondary text-left">
            <Fade bottom>
                <div className="section-education mx-auto p-2">
                    <p className="resume-education p-3 border-bottom">PROJECTS</p>
                    <div className="p-2 border-bottom">
                        <p className="college">
                            <b>Unified Communication Interface for Remote Teams</b>
                            <br />
                        </p>
                        <p>This Project will integrates all the messaging/social media messenger into One app that will 
                            try to improve the productivity will aim of reducing wastage of time in communication.
                            <br/>Tech Stack used:
                        </p>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">HTML</span>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">CSS</span>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">JavaScript</span>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">Bootstrap</span>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">ElectronJS</span>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">NodeJS</span>
                        <br />
                    </div>
                    <div className="p-2 border-bottom">
                        <p className="college">
                            <b>COVID-19 TRACKER</b>
                            <br />
                        </p>
                        <p>Provides the daily updates on COVID19 status like number of confirmed cases, recovered people and deaths 
                            along with global and country wise status. With data updated daily from John Hopkins University 
                            CSSE built using ReactJS
                            <br/>Tech Stack used:
                        </p>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">ReactJS</span>
                        <div className="p-2">
                            <a href="https://github.com/sark-2110/COVID19-TRACKER">View on Github</a>
                        </div>
                    </div>
                    <div className="p-2 border-bottom">
                        <p className="college">
                            <b>EXPENSE TRACKER</b>
                            <br />
                        </p>
                        <p>Keeps Track of daily expense and also keeps tracks of all activity including expense and income so it 
                            easier to track of money spent as well as received in much simplified way through an app.
                            <br/>Tech Stack used:
                        </p>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">ReactJS</span>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">NodeJS</span>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">ExpressJS</span>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">MongoDB</span>
                        <div className="p-2">
                            <a href="https://github.com/sark-2110/ExpenseTracker-MERN">View on Github</a>
                        </div>
                    </div>
                    <div className="p-2 border-bottom">
                        <p className="college">
                            <b>HOT AND COLD GAME</b>
                            <br />
                        </p>
                        <p>Modified Version of the Old Classic Game Guess the Number in a new Format which makes it much more easier 
                            to play and win. 
                            <br/>Tech Stack used:
                        </p>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">ReactJS</span>
                        <div className="p-2">
                            <a href="https://github.com/sark-2110/hot-cold-game">View on Github</a>
                        </div>
                    </div>
                    <div className="p-2">
                        <p className="college">
                            <b>EXERCISE TRACKER</b>
                            <br />
                        </p>
                        <p>Keeps track of daily expense along with log of daily exercise
                            <br/>Tech Stack used:
                        </p>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">ReactJS</span>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">NodeJS</span>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">ExpressJS</span>
                        <span className="border border-secondary text-info p-2 pl-2 mr-2 d-inline-block skill">MongoDB</span>
                        <div className="p-2">
                            <a href="https://github.com/sark-2110/hot-cold-game">View on Github</a>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
        <div id="contact" className="bg-light p-4">
            <div className="container">
                <h2 className="resume-heading p-5 text-center" >CONTACT</h2>
                <Fade bottom>
                    <h2 className="name p-5 text-center">SARVESH KHANDELWAL</h2>
                    <div className="row">
                        <div className="col rounded border border-info p-4 m-3 bg-white ">
                            <h4 className="p-2">Email</h4>
                            <p className="p-1">Email id: khandelwalsarvesh8@gmail.com</p>
                            <a type="button" href="mailto:khandelwalsarvesh8@gmail.com?subject=Contact Email" rel="noopener noreferrer"
                            className="btn btn-outline-dark p-2">
                                <i className="fa fa-envelope-o"> Email</i>
                            </a>
                        </div>
                        <div className="col rounded border border-info p-4 m-3 bg-white ">
                            <h4 className="p-2">Number</h4>
                            <p className="p-1">Contact Number : +91-9834944612</p>
                            <a type="button" href="tel:+62896706255135" rel="noopener noreferrer"
                            className="btn btn-outline-dark p-2">
                                <i className="fa fa-phone"> Contact</i>
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
        <footer className="bg-dark text-white p-1">
            <a href="#home" className="text-info" data-toggle="tooltip" title="Scroll to Top">
                <i className="fa fa-angle-up fa-2x"></i>
            </a>
            <div className="social p-3">
                <a href="https://www.linkedin.com/in/sarveshkhandelwal/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin fa-2x pl-4"></i>
                </a>
                <a href="https://www.facebook.com/khandelwalsarvesh8" target="_blank"  rel="noopener noreferrer">
                    <i className="fa fa-facebook fa-2x pl-4"></i>
                </a>
                <a href="https://twitter.com/sark2110" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter fa-2x pl-4"></i>
                </a>
                <a href="mailto:khandelwalsarvesh8@gmail.com?subject=Contact Email" rel="noopener noreferrer">
                    <i className="fa fa-envelope-o fa-2x pl-4"></i>
                </a>
                <a href="https://github.com/sark-2110" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github fa-2x pl-4"></i>
                </a>
            </div>
            <div>
                <p className="text-muted p-2">©Copyright <b>Sarvesh Khandelwal </b>.All Rights Reserved.</p>
            </div>
        </footer>
    </div>
    )
    }
}
export default Main