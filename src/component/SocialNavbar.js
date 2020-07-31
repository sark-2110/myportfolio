import React from 'react';

export default class SocialNavbar extends React.Component {
    render() {
        return (
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
        )
    }
}
