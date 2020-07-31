import React from 'react';
import Home from './Home';
import Bio from './Bio';
import Education from './Education';
import Internship from './Internship';
import Contact from './Contact';
import Footer from './Footer';
import myStyle from '../css/myStyle.css';


export default class Main extends React.Component{
    render(){
    return(
    <div className="container-fluid" style={myStyle}>
        <Home />
        <Bio />
        <Education />
        <Internship />
        <Contact />
        <Footer />
    </div>
    )
    }
}