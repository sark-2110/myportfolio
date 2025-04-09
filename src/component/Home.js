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
                <div className="container inner-home position-absolute text-white">
                    <Fade right cascade>
                        <h1>Hey there!</h1>
                        <h1>I'm SARVESH KHANDELWAL</h1>
                    </Fade>
                    <p className="p-4">
                        I'm a Computer Engineering Student interested in Software Development,<br />
                        Web Development and Machine Learning. Let's start exploring and find more<br /> 
                        <a href="#bio" className="text-white">about me.</a>
                    </p>
                    <div className="row justify-content-center p-3">
                    <a type="button" href="#bio" className="explore btn btn-outline-light" data-toggle="tooltip" title="Scroll to Bio   ">
                        EXPLORE&nbsp;<i className="fa fa-angle-down"></i>
                    </a>
                    </div>
                </div>  
            </div>
        </div>
        )
    }
}
