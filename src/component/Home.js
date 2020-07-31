import React from 'react';
import Navbar from './Navbar';
import SocialNavbar from './SocialNavbar';
import config from 'react-reveal/globals';
import Fade from 'react-reveal/Fade';
 
config({ ssrFadeout: true });

export default class Home extends React.Component {
    render() {
        return (
        <div className="top-section">
            <Navbar />
            <SocialNavbar />
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
        )
    }
}
