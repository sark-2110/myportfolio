import React from 'react';


export default class Footer extends React.Component {
    render() {
        return (
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
                        <p className="text-muted p-2">©Copyright <b>Sarvesh Khandelwal </b>. All Rights Reserved.</p>
                    </div>
                </footer>
        )
    }
}
