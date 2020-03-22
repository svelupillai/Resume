import React from 'react';
import '../App.css';
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <AboutMe/>
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
