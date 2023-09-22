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
      <Home />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Footer/>
    </div>
);


export default App;
