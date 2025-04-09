import React, { Component } from 'react';
import config from 'react-reveal/globals';
import Fade from 'react-reveal/Fade';
 
config({ ssrFadeout: true });

export default class Contact extends Component {
    render() {
        return (
        <div id="contact" className="bg-light p-4">
            <div className="container">
                <h2 className="resume-heading p-5 text-center" >CONTACT</h2>
                <Fade right>
                    <h2 className="name p-5 text-center">SARVESH KHANDELWAL</h2>
                </Fade>
                <div className="row">
                    <Fade left>
                        <div className="col-lg-5 shadow-lg rounded border border-info p-4 m-3 bg-white mx-auto">
                            <h4 className="p-2">Email</h4>
                            <p className="p-1"><b>Email id :</b> khandelwalsarvesh8@gmail.com</p>
                            <a type="button" href="mailto:khandelwalsarvesh8@gmail.com?subject=Contact Email" rel="noopener noreferrer"
                                className="btn btn-outline-dark p-2">
                                <i className="fa fa-envelope-o"> Email</i>
                            </a>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-lg-5 shadow-lg rounded border border-info p-4 m-3 bg-white mx-auto">
                            <h4 className="p-2">Number</h4>
                            <p className="p-1"><b>Contact Number :</b> +91-9834944612</p>
                            <a type="button" href="tel:+919834944612" rel="noopener noreferrer" className="btn btn-outline-dark p-2">
                                <i className="fa fa-phone"> Contact</i>
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
        )
    }
}
