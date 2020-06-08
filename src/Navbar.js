import React, { Component } from 'react';
import myStyle from './myStyle.css'
import Resume from './Resume.pdf'

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          subject: 'Contact Form',
          message:''
        };
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
    render(){
        return(

        <div className="container-fluid" style={{position:"relative",margin:"0",padding:"0"}}>
            <div className="top-section">
                <nav id="navbar" className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#internship">Internship</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        </ul>
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
                    <p className="answer">&nbsp; => "<a target="_blank" href={Resume}>sarveshResume.pdf</a>"</p>
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
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">Bootstrap</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">ReactJS</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">SQL</span>
                    <span className="border border-secondary text-info pr-2 pl-2 mr-2 d-inline-block skill">DBMS</span>
                </div>
            </div>
            <br />
            <div id="internship" className="mx-auto p-3 border-top text-left">
                <div className="section-education mx-auto p-2">
                    <p className="resume-education p-3 border-bottom">INTERNSHIP</p>
                    <p className="college">
                        <b>SAHU TECHNOLOGIES</b>
                        <span className="float-right lead">
                            <i>DEC 2019-JAN 2020</i>
                        </span>
                        <br />
                        <h5>Web Development Intern</h5>
                    </p>
                    <p> rdfh</p>

                    <a></a>
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
            <div id="contact" className="mx-auto bg-light p-5">
                <h2 className="resume-heading p-3 text-center" >CONTACT</h2>
                <div className="row">
                    <div className="col-lg-8">
                        <form className="mx-auto p-3">

                            <div className="form-group row">
                                <label for="name" className="col-3 col-form-label">Name:</label>
                                <input type="text" className="col-9 form-control" id="name" placeholder="Enter name" name="name" 
                                    onChange={this.myChangeHandler} required />
                            </div>
                            <h6 style={{fontWeight:"lighter"}}>Entered Name is: {this.state.name}</h6>

                            <div className="form-group row">
                                <label for="email" className="col-3 form-label">Email:</label>
                                <input type="email" className="col-9 form-control" id="email" placeholder="Enter Email" name="email" 
                                    onChange={this.myChangeHandler} required />
                            </div>
                            <h6 style={{fontWeight:"lighter"}}>Entered Email is: {this.state.email}</h6>

                            <div className="form-group row">
                                <label for="subject" className="col-3 col-form-label">Subject:</label>
                                <input type="text" className="col-9 form-control" id="subject" placeholder="Enter Subject" name="subject" 
                                    onChange={this.myChangeHandler} />
                            </div>
                            <h6 style={{fontWeight:"lighter"}}>Entered Subject is: {this.state.subject}</h6>

                            <div className="form-group row">
                                <label for="message" className="col-3 col-form-label">Message:</label>
                                <textarea type="textarea" className="col-9 form-control" id="message" placeholder="Enter message" 
                                    name="message" rows={3}
                                    onChange={this.myChangeHandler} required />
                            </div>
                            <h6 style={{fontWeight:"lighter"}}>Entered Message is: {this.state.message}</h6>
                            <button type="submit" value="submit" className="btn btn-outline-dark ">SUBMIT</button>
                            <div>
                                { window.location.hash === '#success' &&
                                    <div id="success">
                                    <p>Your message has been sent!</p>
                                    </div>
                                }
                                { window.location.hash === '#error' &&
                                    <div id="error">
                                    <p>An error occured while submitting the form.</p>
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 p-4">
                        <h4 className="text-left">Address:</h4>
                        <p className="text-left">Sarvesh Khandelwal <br/>
                            304,A-6 Wing,Siddhart Nagar Complex, <br/>
                            Siddhart Nagar,Borivali(East),<br/>
                            Mumbai-400066</p>
                        <p className="text-left">+91-9834944612</p>
                    </div>
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