import React from 'react';
import myStyle from './myStyle.css'
import Resume from './Resume.pdf'

class Navbar extends React.Component{
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

        <div className="container-fluid" style={{position:"relative",margin:"0",padding:"0"}}>
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
                <div id="home" className="position-relative">
                    <div className="inner-home tent-center position-absolute text-white">
                        <h1>I'm Sarvesh Khandelwal</h1>
                        <p className="p-3"><small className="text-muted" >I'm a Computer 
                        Engineering Student interested in </small>Software Development,<br />Web Development
                        <small className="text-muted"> and </small>
                        Machine Learning. <small className="text-muted">Let's start exploring and find more</small>
                        <br /> <a href="#bio" style={{color:"white"}}>about me.</a></p>
                        
                        <div className="social pt-3">
                            <a href="https://www.linkedin.com/in/sarveshkhandelwal/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin fa-2x pl-3"></i>
                            </a>
                            <a href="https://www.facebook.com/khandelwalsarvesh8" target="_blank"  rel="noopener noreferrer">
                                <i className="fa fa-facebook fa-2x pl-3"></i>
                            </a>
                            <a href="https://twitter.com/sark2110" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter fa-2x pl-3"></i>
                            </a>
                            <a href="mailto:khandelwalsarvesh8@gmail.com?subject=Contact Email" rel="noopener noreferrer">
                                <i className="fa fa-envelope-o fa-2x pl-3"></i>
                            </a>
                            <a href="https://github.com/sark-2110" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github fa-2x pl-3"></i>
                            </a>
                        </div>
                        
                    </div>
                    <a href="#bio" className="down-arrow p-2 position-absolute text-light">
                        <i className="fa fa-angle-down fa-2x"></i>
                    </a>
                </div>
            </div>
            <div id="bio" className="console position-relative">

                <div className="code position-absolute text-left text-white">

                    <p>>> getEducation()</p>
                    <p className="answer">&nbsp; => Bachelor Of Engineering (B.E.)</p>
                    <p>>> getUniversity()</p>
                    <p  className="answer">&nbsp; => Mumbai University</p>
                    <p>>> getMajor()</p>
                    <p className="answer">&nbsp; => Computer Engineering</p>
                    <p>>> expectedGraduation()</p>
                    <p className="answer">&nbsp; => May 2021</p>
                    <p>>> getInterest()</p>
                    <p className="answer">&nbsp; => ["Web Development", "Software Development" , "Machine Learning"]</p>
                    <p>>> getResume()</p>
                    <p className="answer">&nbsp; => "<a target="_blank" rel="noopener noreferrer" href={Resume}>sarveshResume.pdf</a>"</p>
                    <p>>> getEmail()</p>
                    <p className="answer">&nbsp; => "<a href="mailto:khandelwalsarvesh8@gmail.com?subject=Contact Email">
                        khandelwalsarvesh8@gmail.com</a>"
                    </p>

                </div>
                <a href="#resume" className="down-arrow position-absolute text-info p-2">
                    <i className="fa fa-angle-down fa-2x"></i>
                </a>
            </div>
            <div id="resume" className="text-left">
                <h2  className="resume-heading p-5 text-center">RESUME</h2>
                <div className="section-education mx-auto p-2">
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
                    <span className="border border-secondary text-info pr-2 pl-2 mr-1 d-inline-block skill">C/C++</span><p-1> </p-1>
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
                </div>
            </div>
            <br />
            <div id="internship" className="mx-auto p-3 border-top text-left">
                <div className="section-education mx-auto p-2">
                    <p className="resume-education p-3 border-bottom">INTERNSHIP</p>
                    <p className="college">
                        <b>Invide Labs</b>
                        <span className="float-right lead">
                            <i>25 May 2019-25 July 2020</i>
                        </span>
                        <br />
                        <h5>SDE Intern</h5>
                    </p>
                    <p className="college">
                        <b>SAHU TECHNOLOGIES</b>
                        <span className="float-right lead">
                            <i>DEC 2019-JAN 2020</i>
                        </span>
                        <br />
                        <h5>Web Development Intern</h5>
                    </p>
                </div>
            </div>
            <div id="internship" className="mx-auto p-3 border border-secondary text-left">
                <div className="section-education mx-auto p-2">
                    <p className="resume-education p-3 border-bottom">PROJECTS</p>
                    <p className="college">
                        <b>SCHOOL MANAGEMENT SYSTEM</b>
                        <br />
                    </p>
                    <p>An effective solution for managing activities in School Effectively.
                        <br/>Tech Stack used:
                    </p>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">HTML</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">CSS</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">JavaScript</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">Bootstrap</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">PHP</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">MySQL</span>
                    <br />
                    <a href="https://github.com/sark-2110/School-Management-System">View on Github</a>
                    <br />
                    <p className="college" style={{borderTop: "1px solid #CEC8C8"}}>
                        <b>HOTEL MANAGEMENT SYSTEM</b>
                        <br />
                    </p>
                    <p>Created a hotel management system using PYTHON GUI and database.
                        Simple yet effective solution for managing check-in and check out of customer and displaying a list of 
                        present customers also
                        <br/>Tech Stack used:
                    </p>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">Python</span>
                </div>
                
            </div>
            <div id="contact" className="bg-light p-4">
                <div className="container">
                <h2 className="resume-heading p-3 text-center" >CONTACT</h2>
                <h2 className="name p-5 text-center">SARVESH KHANDELWAL</h2>
                <div className="row">
                    <div className="rounded border border-info p-4 mb-2 mx-auto">
                        <h4>Email</h4>
                        <p>Email id: khandelwalsarvesh8@gmail.com</p>
                        <a type="button" href="mailto:khandelwalsarvesh8@gmail.com?subject=Contact Email" rel="noopener noreferrer"
                        className="btn btn-outline-dark">
                            <i className="fa fa-envelope-o"> Email</i>
                        </a>
                    </div>
                    <div className="rounded border border-info p-4 mb-2 mx-auto">
                        <h4>Email</h4>
                        <p>Email id: khandelwalsarvesh8@gmail.com</p>
                        <a type="button" href="mailto:khandelwalsarvesh8@gmail.com?subject=Contact Email" rel="noopener noreferrer"
                        className="btn btn-outline-dark">
                            <i className="fa fa-envelope-o"> Email</i>
                        </a>
                    </div>
                    <div className="rounded border border-info p-4 mb-1 mx-auto">
                        <h4>Email</h4>
                        <p>Email id: khandelwalsarvesh8@gmail.com</p>
                        <a type="button" href="mailto:khandelwalsarvesh8@gmail.com?subject=Contact Email" rel="noopener noreferrer"
                        className="btn btn-outline-dark">
                            <i className="fa fa-envelope-o"> Email</i>
                        </a>
                    </div>  
                </div>

                <p>Contact Number : +91-9834944612</p>
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
                    <p className="text-muted p-2">©Copyright Sarvesh Khandelwal</p>
                </div>
            </footer>
        </div>
        )
    }
}
export default Navbar