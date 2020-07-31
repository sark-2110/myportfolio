import React from 'react';
import Resume from '../attachments/Resume.pdf';
import config from 'react-reveal/globals';
import Fade from 'react-reveal/Fade';
 
config({ ssrFadeout: true });

export default class Bio extends React.Component {
    render() {
        return (
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
        )
    }
}
