import React from 'react';
import '../App.css';
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects';
import Footer from './Footer';

const App = () =>
( 
    <div className="App">
      <Header />
      <Home className="anim-delay-500ms"/>
      <AboutMe className="anim-delay-1000ms"/>
      <Skills className="anim-delay-1500ms"/>
      <Experience className="anim-delay-2000ms"/>
      <Education className="anim-delay-500ms"/>
      <Projects className="anim-delay-500ms"/>
      <Footer/>
    </div>
);


export default App;
