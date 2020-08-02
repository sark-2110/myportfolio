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
                <h2 className="name p-5 text-center">SARVESH KHANDELWAL</h2>
                <Fade bottom>
                    <div className="row">
                        <div className="col-lg-5 rounded border border-info p-4 m-3 bg-white mx-auto">
                            <h4 className="p-2">Email</h4>
                            <p className="p-1">Email id: khandelwalsarvesh8@gmail.com</p>
                            <a type="button" href="mailto:khandelwalsarvesh8@gmail.com?subject=Contact Email" rel="noopener noreferrer"
                                className="btn btn-outline-dark p-2">
                                <i className="fa fa-envelope-o"> Email</i>
                            </a>
                        </div>
                        <div className="col-lg-5 rounded border border-info p-4 m-3 bg-white mx-auto">
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
        )
    }
}
