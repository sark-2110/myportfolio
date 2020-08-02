import React from 'react';
import Home from './component/Home';
import Bio from './component/Bio';
import Education from './component/Education';
import Internship from './component/Internship';
import Contact from './component/Contact';
import Footer from './component/Footer';
import myStyle from './css/myStyle.css';

function App() {
  return (
    <div className="container-fluid" style={myStyle}>
        <Home />
        <Bio />
        <Education />
        <Internship />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;