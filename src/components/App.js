import React from 'react';
import '../App.css';
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education'

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <AboutMe />
      <Education />
    </div>
  );
}

export default App;
