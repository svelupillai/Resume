import React from 'react';
import '../App.css';
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education'
import Experience from './Experience'

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <AboutMe/>
      <Education />
      <Experience />
    </div>
  );
}

export default App;
