import React from 'react';
import '../App.css';
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <AboutMe />
    </div>
  );
}

export default App;
