import React from 'react';

export default class SocialNavbar extends React.Component {
    render() {
        return (
            <div className="side-nav">
                <div className="fl-fl float-lk">
                    <i className="fa fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/sarveshkhandelwal/" target="_blank" rel="noopener noreferrer">Connect!</a>
                </div>
                <div className="fl-fl float-fb">
                    <i className="fa fa-facebook"></i>
                    <a href="https://www.facebook.com/khandelwalsarvesh8" target="_blank"  rel="noopener noreferrer">Connect</a>
                </div>
                <div className="fl-fl float-tw">
                    <i className="fa fa-twitter"></i>
                    <a href="https://twitter.com/sark2110" target="_blank" rel="noopener noreferrer">Follow</a>
                </div>
                <div className="fl-fl float-mail">
                    <i className="fa fa-envelope-o"></i>
                    <a href="mailto:khandelwalsarvesh8@gmail.com?subject=Contact Email" rel="noopener noreferrer">Email Me</a>
                </div>
                <div className="fl-fl float-git">
                    <i className="fa fa-github"></i>
                    <a href="https://github.com/sark-2110" target="_blank" rel="noopener noreferrer">Checkout Github</a>
                </div>
            </div>
        )
    }
}
